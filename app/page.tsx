import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Lab from "@/components/Lab";
import Skills from "@/components/Skills";
import Gallery from "@/components/Gallery";
import KindWords from "@/components/KindWords";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Lab /> */}
      <Skills />
      {/* <Gallery /> */}
      <KindWords />
      <Contact />
    </main>
  );
}
