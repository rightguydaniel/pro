import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceList from "@/components/ExperienceList";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceList />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
