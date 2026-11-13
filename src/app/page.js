'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  // Init AOS once the sections are actually in the DOM
  useEffect(() => {
    if (!isLoading) {
      AOS.init({ duration: 700, once: true, offset: 80 });
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-white"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-16 w-16">
              <span className="absolute inset-0 rounded-full border-4 border-purple-100" />
              <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-purple-600 border-r-fuchsia-500" />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-extrabold tracking-tight"
            >
              <span className="text-gray-900">abd</span>
              <span className="gradient-text">Elmonem</span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Header />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="gradient-text font-semibold">abdElmonem</span> — Built with Next.js
          </footer>
          <BackToTop />
        </>
      )}
    </>
  );
}
