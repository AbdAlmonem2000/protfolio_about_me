'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const CV_URL = 'https://drive.google.com/file/d/1CyGpx2kwuglk0us9XZkW-HjXW1RY_Qe4/view?usp=sharing';

function Logo() {
  return (
    <motion.a
      href="#home"
      className="group flex items-center gap-2 select-none"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* pulsing dot */}
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-linear-to-br from-purple-600 to-fuchsia-500" />
      </span>
      <span className="relative text-2xl font-extrabold tracking-tight">
        <span className="text-gray-900 transition-colors duration-300 group-hover:text-purple-700">abd</span>
        <span className="gradient-text">Elmonem</span>
        {/* underline that grows on hover */}
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-purple-600 to-pink-500 transition-all duration-500 group-hover:w-full" />
      </span>
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link of the section currently on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 start-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-lg shadow-purple-500/5 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Logo />

        <div className="flex items-center gap-2 md:order-2">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href={CV_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-linear-to-r from-purple-700 to-fuchsia-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-purple-500/30"
          >
            CV
            <FontAwesomeIcon className="ms-2" icon={faFilePdf} />
          </motion.a>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 font-semibold md:order-1 md:flex">
          {links.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`py-1 transition-colors ${active === id ? 'text-purple-700' : 'text-gray-600 hover:text-purple-600'}`}
              >
                {label}
              </a>
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-purple-600 to-pink-500"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full overflow-hidden md:hidden"
            >
              <ul className="mt-4 flex flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50 p-3 font-semibold">
                {links.map(({ id, label }, i) => (
                  <motion.li key={id} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <a
                      onClick={() => setIsOpen(false)}
                      href={`#${id}`}
                      className={`block rounded-md px-3 py-2 ${active === id ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500"
      />
    </nav>
  );
}
