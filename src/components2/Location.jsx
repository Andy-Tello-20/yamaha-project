export default function Location() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-4xl mx-auto text-center px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          Ubicación
        </h2>

        <p className="text-lg mb-4">
          La moto se encuentra en <strong>La Falda, Córdoba</strong>.
        </p>

        <p className="mb-4">
          Se puede coordinar una visita para verla personalmente sin compromiso.
        </p>

        {/* <p className="mb-8">
          Posibilidad de envío a otras provincias a cargo del comprador.
        </p> */}

        <a
          href="https://wa.me/543548542606"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-8 py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition"
        >
          Contactar por WhatsApp
        </a>

      </div>
    </section>
  );
}