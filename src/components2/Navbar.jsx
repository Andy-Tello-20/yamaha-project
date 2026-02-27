export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background-dark/80 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary text-3xl">🏍️</span>
          <span className="font-bold text-xl tracking-tight">
            XTZ <span className="text-primary">250</span>
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#descripcion" className="hover:text-primary transition">
            Detalles
          </a>
          <a href="#galeria" className="hover:text-primary transition">
            Galería
          </a>
          <a href="#ubicacion" className="hover:text-primary transition">
            Ubicación
          </a>
        </div>
      </div>
    </nav>
  );
}