import "../styles/description.css"
import React, { useRef } from "react";
import {useScrollReveal} from "../hooks/ScrollReveal"


export default function Description() {

  const ref = useRef(null);
  useScrollReveal(ref);


  return (
    <section ref={ref} className="section description reveal">
      <h2>Descripción</h2>
      <p>
        Moto versátil ideal para ciudad y montaña. Muy bien cuidada.
        Incluye accesorios que mejoran rendimiento y protección.
        Lista para transferir.
      </p>
    </section>
  )
}