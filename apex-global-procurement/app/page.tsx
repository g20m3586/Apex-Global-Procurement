import Hero from "./ui/hero";
import OurProcess from "./ui/our-process";
import VatAdvantage from "./ui/vat-advantage";
import Services from "./ui/services";
import About from "./ui/about";
import Contact from "./ui/contact";
import Footer from "./ui/footer";

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