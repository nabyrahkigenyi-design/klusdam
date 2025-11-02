import ContactForm from "./ContactForm";

export default function ContactInline() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Vrijblijvende offerte</h2>
          <p className="mt-2">Vul je gegevens in. Je ontvangt een bevestiging per e-mail en we nemen snel contact met je op.</p>
          <ContactForm />
        </div>
        <div className="rounded-xl bg-cream p-6">
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="mt-2">Adres: Von Leibnizstraat 23 a, 3112 XN Schiedam</p>
          <p className="mt-1">Telefoon: <a className="text-bronze" href="tel:+31634099060">06 34099060</a></p>
          <p className="mt-1">E-mail: <a className="text-bronze" href="mailto:info@klusdam.nl">info@klusdam.nl</a></p>
          <div className="mt-4">
            <iframe
              title="Klusdam Map"
              className="w-full h-64 rounded"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Von%20Leibnizstraat%2023%20a%2C%203112%20XN%20Schiedam&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
