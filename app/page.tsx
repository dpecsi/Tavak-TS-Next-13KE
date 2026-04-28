import Megoldás from "./Megoldás";

export default function TavakOldal() {
  const m: Megoldás = new Megoldás("tavak.txt");
  return (
    <div className="font-mono whitespace-pre">
      <p>5. feladat: Tavak száma: {m.tavakSzáma} db</p>
      <p>6. feladat: kanadai tavak száma: {m.kanadaiTavak} db</p>
      <p>7. feladat: A legnagyobb tó adatai:</p>
      <p>{"\t"}Név: {m.legnagyobbTó.név}</p>
      <p>{"\t"}Ország(ok): {m.legnagyobbTó.országok.join(",")}</p>
      <p>{"\t"}Átlagos terület: {m.legnagyobbTó.terület} Km2</p>
      <p>8. feladat: {m.vanMagyar ? "Van" : "Nincs"} magyar tó az adatok között.</p>
      <p>9. feladat: Sivatagos területen fekvő tavak: {m.sivatagosTavak} db</p>
      <p>10. feladat: {m.ausztrálTavak("ausztral.txt")}</p>
      <p>11. feladat: Statisztika</p>
      {[...m.statisztika.entries()].map((érték) => {
        return (<p key={érték[0]}>{"\t" + érték[0]} - {érték[1]} db</p>)
      })}
    </div>
  );
}
