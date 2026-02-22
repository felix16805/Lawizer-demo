import Hero from "../components/Hero";
import FeaturedLawyers from "../components/FeaturedLawyers";
import Services from "../components/Services";
import About from "../components/About";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedLawyers />
      <Services />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
