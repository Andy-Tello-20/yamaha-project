export default function Description() {
  return (
    <section
      id="descripcion"
      className="py-20 container mx-auto px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">
            Sobre esta unidad
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Yamaha XTZ 250 año 2009 en excelente estado general.
            Mantenimiento al día, lista para transferir.
            Ideal tanto para ciudad como para viajes y caminos rurales.
            Moto confiable, robusta y lista para usar.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Stat label="Kilometraje" value="44.000 km" />
            <Stat label="Año" value="2009" />
            <Stat label="Estado" value="Excelente" />
          </div>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold mb-6">
            Equipamiento & Extras
          </h3>

          <ul className="space-y-4 text-slate-300">
            <li>• Cubre puños reforzados</li>
            <li>• Cubrecárter de aluminio</li>
            <li>• Parrilla porta equipaje</li>
            <li>• Vinilo 3M protector</li>
            <li>• Escape deportivo opcional</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}