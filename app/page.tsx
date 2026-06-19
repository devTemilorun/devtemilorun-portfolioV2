import Navigation from '@/scenes/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/scenes/Hero';
import Projects from '@/scenes/Projects';
import TechStack from '@/scenes/TechStack';
import Contact from '@/scenes/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}