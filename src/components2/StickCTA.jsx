export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <a
        href="https://wa.me/549XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-8 rounded-full shadow-2xl transition-all font-bold text-lg"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}