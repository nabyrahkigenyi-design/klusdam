export default function OverTeaser() {
  return (
    <section id="over" className="py-16 md:py-20 pattern-tools" data-reveal>
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="fade-light rounded-xl p-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Klusdam in Schiedam</h2>
          <p className="mt-4 text-lg">
            Woningrenovatie zonder stress. Wij plannen, coördineren en leveren op met garantie.
            Eén team voor sloop, leidingwerk, tegel- en timmerwerk, stuken en schilderen.
          </p>
          <ul className="mt-5 space-y-2 text-base">
            <li>• Afspraak = afspraak. Strakke planning en vaste contactpersoon.</li>
            <li>• Netjes werken: stofbeperking, afdekking en elke dag opgeruimd.</li>
            <li>• Duurzame materialen en vakmanschap dat jaren mooi blijft.</li>
          </ul>
          <p className="mt-5">
            Standplaats: <strong>Von Leibnizstraat 23 a, 3112 XN Schiedam</strong>. Werkgebied: Schiedam,
            Rotterdam, Vlaardingen, Delft en omgeving.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow" data-reveal>
          <img
            src="https://i.ibb.co/wrwwGcYS/Bathroom-Tile-Designs.jpg"
            alt="Team aan het werk"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

