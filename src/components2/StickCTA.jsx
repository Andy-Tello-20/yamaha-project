// export default function StickyCTA() {
//   return (
//     <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
//       <a
//         href="https://wa.me/543548542606"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-8 rounded-full shadow-2xl transition-all font-bold text-lg"
//       >
//         Consultar por WhatsApp
//       </a>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function StickyCTA() {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const section = document.getElementById("location");

//     if (!section) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(false);
//         } else {
//           setVisible(true);
//         }
//       },
//       { threshold: 0.4 }
//     );

//     observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
//       <a
//         href="https://wa.me/543548542606"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-8 rounded-full shadow-2xl transition-all font-bold text-lg"
//       >
//         Consultar por WhatsApp
//       </a>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyCTA() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const section = document.getElementById("location");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <a
        href="https://wa.me/543548542606"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 font-bold text-lg"
      >
        <FaWhatsapp className="animate-pulse-slow" size={24} />
        Consultar por WhatsApp
      </a>
    </div>
  );
}