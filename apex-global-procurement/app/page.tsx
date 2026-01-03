import Hero from "../components/ui/hero";
import OurProcess from "../components/ui/our-process";
import VatAdvantage from "../components/ui/vat-advantage";
import Services from "../components/ui/services";
import About from "../components/ui/about";
import Contact from "../components/ui/contact";
import Footer from "../components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <OurProcess />
      <VatAdvantage />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}