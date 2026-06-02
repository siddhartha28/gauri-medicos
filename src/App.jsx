import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppOrder from './components/WhatsAppOrder';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatsAppOrder />
        <Features />
        <HowItWorks />
        <Categories />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
