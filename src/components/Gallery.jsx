import "../styles/gallery.css";
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
    <section className="gallery-section">
      <h2>Galería</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={img}
              alt={`Vista ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}