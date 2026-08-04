import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { Marquee } from "@/components/ds/Marquee";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Marquee
        items={[
          "Flutter",
          "Dart",
          "React Native",
          "Swift",
          "Kotlin",
          "JavaScript",
          "REST API",
        ]}
      />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
