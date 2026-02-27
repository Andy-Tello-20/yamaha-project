import "../styles/hero.css"
import img1 from "../assets/DSC_0082-01.webp"
import yamaha from "../assets/yamaha-logo.png"

export default function Hero() {
  return (
    <section className="hero">

<div className="nav">
  <img className="yamaha-logo" src={yamaha} alt="" />
  <h4>XTZ 250 - 2009</h4>
</div>


      <img src={img1} alt="Yamaha XTZ 250 2009" />
      <div className="hero-overlay">
        
        <p>44.000 km · Lista para transferir</p>
        <div className="price">$6.100.000</div>
      </div>
    </section>
  )
}