
import Navbar from "./components2/Navbar";
import Hero from "./components2/Hero";
import Description from "./components2/Description";
import Gallery from "./components2/Gallery";
import Location from "./components2/Location";
import StickyCTA from "./components2/StickCTA";
import Footer from "./components2/Footer";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      <Navbar />
      <Hero />
      <Description />
      <Gallery />
      <Location />
      <StickyCTA />
      <Footer />
    </div>
  );
}

export default App;