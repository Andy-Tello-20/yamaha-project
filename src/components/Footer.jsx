
import "../styles/animation.css"
import "../styles/footer.css"
import React, { useRef } from "react";
import {useScrollReveal} from "../hooks/ScrollReveal"

export const Footer = () => {

const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <footer ref={ref} className="footer reveal">
      <div className="footer-content">
        <p>📞 Contacto: +54 9 1234 5678</p>
        <p>📧 Email: ventas@yamahaxtz.com.ar</p>
        <p>¿Querés publicar tu usado? Contáctanos y te ayudamos a venderlo.</p>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Yamaha XTZ 250 | Landing Page</p>
      </div>
    </footer>
  )
}
