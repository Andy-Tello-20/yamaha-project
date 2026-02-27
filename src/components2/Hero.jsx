import heroImg from "../assets/DSC_0082-01.webp";

export default function Hero() {
  return (
    <section className="relative pt-16 min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
        <img
          src={heroImg}
          className="w-full h-full object-cover"
          alt="Yamaha XTZ 250"
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded mb-4">
            Oportunidad Única
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Yamaha <span className="text-primary">XTZ 250</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            2009 — Impecable estado, lista para la aventura.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
              Ver Precio
            </button>

            {/* <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold transition-all">
              Especificaciones
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}