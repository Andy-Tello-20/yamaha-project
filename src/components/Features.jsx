import "../styles/features.css"

import React, { useRef } from "react";
import {useScrollReveal} from "../hooks/ScrollReveal"
import "../styles/animation.css";

export default function Features() {

const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section ref={ref} className="section reveal">
      <h2>Características</h2>
      <div className="features">
        <div className="card">✔ 44.000 km reales</div>
        <div className="card">✔ Cubre puños</div>
        <div className="card">✔ Cubrecárter</div>
        <div className="card">✔ Parrilla porta equipaje</div>
        <div className="card">✔ Vinilo 3M protector</div>
        <div className="card">✔ Escape deportivo opcional</div>
      </div>
    </section>
  )
}