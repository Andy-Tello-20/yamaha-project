import { FaWhatsapp } from "react-icons/fa";

export default function Location() {
  return (
    <section className="py-20 bg-background-light" id="location">
      <div className="max-w-4xl mx-auto text-center px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          Ubicación
        </h2>

        <p className="text-lg mb-4">
          La moto se encuentra en <strong>La Falda, Córdoba</strong>.
        </p>

        <p className="mb-10">
          Se puede coordinar una visita para verla personalmente sin compromiso.
        </p>

        <a
          href="https://wa.me/543548542606"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
        >
          <FaWhatsapp size={22} />
          Contactar por WhatsApp
        </a>

      </div>
    </section>
  );
}