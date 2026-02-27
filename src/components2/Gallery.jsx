import img0 from "../assets/DSC_0080-01.webp";
import img01 from "../assets/DSC_0082-01.webp";
import img1 from "../assets/DSC_0075-01.webp";
import img2 from "../assets/DSC_0073-01.webp";
import img3 from "../assets/DSC_0071-01.webp";
import img4 from "../assets/DSC_0068-01.webp";
import img5 from "../assets/DSC_0067-01.webp";
import img6 from "../assets/DSC_0065-01.webp";

const images = [img0,img1, img2, img3, img4,img01, img5 ,img6];

export default function Gallery() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Galería de Fotos
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt={`Foto ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}