import "./styles/global.css"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Description from "./components/Description"

export default function App() {
  return (
    <div className="container">
      <Hero />
      <Description/>
      <Gallery />
      <Features />
      <CTA />
    </div>
  )
}