'use client';

import { useEffect, useState } from 'react';
import Navbar from "./_compoent/Navbar/page";
import About from "./compoent/About/page";
import Contact from "./compoent/Contact/page";
import Header from "./compoent/Header/page";
import Projects from "./compoent/Projects/page";
import { ImSpinner2 } from 'react-icons/im';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center bg-white">
          <ImSpinner2 className="animate-spin text-purple-600 text-6xl" />
        </div>
      ) : (
        <>
          <section id="home">
            <Header />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </>
      )}
    </>
  );
}
