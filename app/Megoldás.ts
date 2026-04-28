import fs from "fs";
import Tó from "./Tó";

export default class Megoldás {
  #tavak: Tó[] = [];
  constructor(fájl: string) {
    const sorok: string[] = fs
      .readFileSync(fájl, "utf-8")
      .split("\n")
      .map((sor) => sor.trim())
      .filter((sor) => sor.length > 0);
    for (const sor of sorok.slice(1)) {
      this.#tavak.push(new Tó(sor));
    }
  }

  get tavakSzáma(): number {
    return this.#tavak.length;
  }

  get kanadaiTavak(): number {
    return this.#tavak.filter((tó) => tó.országok.includes("Kanada")).length;
  }

  get legnagyobbTó(): Tó {
    return this.#tavak.sort((a, b) => b.terület - a.terület)[0];
  }

  get vanMagyar(): boolean {
    return this.#tavak.findIndex((tó) => tó.országok.includes("Magyarország")) >= 0;
  }

  get sivatagosTavak(): number {
    return this.#tavak.filter((tó) => tó.sivatagos).length;
  }

  ausztrálTavak(fájl: string): string {
    const adatok: string = this.#tavak
      .filter((tó) => tó.országok.includes("Ausztrália"))
      .map((tó) => `${tó.név};${tó.terület}`)
      .join("\n");
    fs.writeFileSync(fájl, adatok, "utf-8");
    return fájl;
  }

  get statisztika(): Map<string, number> {
    const országok: Map<string, number> = new Map();
    for (const tó of this.#tavak.filter((tó) => tó.országok.length == 1)) {
      országok.set(tó.országok[0], (országok.get(tó.országok[0]) ?? 0) + 1);
    }
    return országok;
  }
}
