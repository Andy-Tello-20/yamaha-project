export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-primary text-2xl">🏍️</span>
        <span className="font-bold text-lg tracking-tight">
          XTZ <span className="text-primary">250</span>
        </span>
      </div>

      <p className="text-slate-500 text-sm">
        © 2024 Venta Particular.
        Todas las fotos son reales de la unidad ofrecida.
      </p>

      <div className="h-20 md:h-8"></div>
    </footer>
  );
}