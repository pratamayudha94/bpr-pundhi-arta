import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickAction from "@/components/QuickAction";
import Services from "@/components/Services";
import About from "@/components/About";
import Products from "@/components/Products";
import News from "@/components/News";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuickAction />
      <Services />
      <About />
      <Products />
      <News />
      <Awards />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
