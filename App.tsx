import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
