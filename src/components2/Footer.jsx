import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-primary text-2xl">🏍️</span>
        <span className="font-bold text-lg tracking-tight">
          XTZ <span className="text-primary">250</span>
        </span>
      </div>

      <p className="text-slate-500 text-sm mb-6">
        © 2024 Venta Particular.
        Todas las fotos son reales de la unidad ofrecida.
      </p>

      {/* Sección secundaria profesional */}
      <div className="text-slate-400 text-sm">
        <p className="mb-2">
          ¿Necesitas una página o aplicación web?
        </p>

        <a
          href="https://wa.me/543548542606"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline transition"
        >
          <FaWhatsapp size={16} />
          Contáctanos
        </a>
      </div>

      <div className="h-20 md:h-8"></div>
    </footer>
  );
}