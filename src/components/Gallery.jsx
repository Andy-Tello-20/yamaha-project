
import { useState, useEffect, useRef } from "react";
import "../styles/gallery.css";
import img1 from "../assets/DSC_0065-01.webp";
import img2 from "../assets/DSC_0067-01.webp";
import img3 from "../assets/DSC_0068-01.webp";
import img4 from "../assets/DSC_0069-01.webp";
import img5 from "../assets/DSC_0075-01.webp";
import img6 from "../assets/DSC_0071-01.webp";
import img9 from "../assets/DSC_0080-01.webp";
import img10 from "../assets/DSC_0073-01.webp";
import img11 from "../assets/DSC_0082-01.webp";

import { useScrollReveal } from "../hooks/ScrollReveal";
import "../styles/animation.css";

const images = [img10, img9, img2, img3, img6, img4, img5, img1, img11];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const ref = useRef(null);
  useScrollReveal(ref);

  const changeSlide = (index) => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 200);
  };

  const nextSlide = () => {
    changeSlide(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    changeSlide(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  });

  return (
    <section ref={ref} className="section reveal">
      <h2>Galería</h2>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>

        <img
          src={images[currentIndex]}
          alt="Yamaha XTZ 250"
          className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
        />

        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Vista ${index + 1}`}
            className={`thumbnail ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}