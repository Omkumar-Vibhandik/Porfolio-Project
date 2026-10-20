import React, { useRef } from "react";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Home/Navbar";

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="text-white relative min-h-screen">
      <Navbar refs={{ heroRef, aboutRef, projectsRef, contactRef }} />
      <main className="overflow-x-hidden">
        <section ref={heroRef} id="home">
          <Home />
        </section>

        <section ref={aboutRef} id="about" className="pt-20">
          <Agence />
        </section>

        <section ref={projectsRef} id="projects" className="pt-20">
          <Projects />
        </section>

        {/* Add Contact section when created */}
        {/* <section id="contact" className="pt-20">
          <Contact />
        </section> */}
      </main>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </div>
  );
};

export default App;
