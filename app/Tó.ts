export default class Tó {
  #névStr: string;
  #területStr: string;
  #országokStr: string;

  get terület(): number {
    if (this.#területStr.includes("-")) {
      const értékek = this.#területStr.split("-");
      return Math.round(
        értékek.flatMap((str) => Number(str)).reduce((a, b) => a + b) / értékek.length,
      );
    }
    return Number(this.#területStr);
  }

  get név(): string {
    return this.#névStr;
  }

  get országok(): string[] {
    return this.#országokStr.split(",");
  }

  get sivatagos(): boolean {
    return this.#területStr.includes("-");
  }

  constructor(sor: string) {
    const [név, ter, orsz]: string[] = sor.split(";");
    this.#névStr = név;
    this.#területStr = ter;
    this.#országokStr = orsz;
  }
}
