import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-red-900/40 selection:text-white">
      {/* Cinematic Hero (includes nav) */}
      <HeroSection />

      {/* Main Sections */}
      <main className="flex-grow">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
