'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../../public/profile.jpg';

const socials = [
  { icon: faInstagram, label: 'Instagram', link: 'https://www.instagram.com/3body_sal?igsh=Z2hoZGtscmM5aDR2' },
  { icon: faLinkedinIn, label: 'LinkedIn', link: 'https://www.linkedin.com/in/abod-ahmed-45398b290' },
  { icon: faGithub, label: 'GitHub', link: 'https://github.com/AbdAlmonem2000' },
  { icon: faWhatsapp, label: 'WhatsApp', link: 'https://wa.me/966538259830' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Header() {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Specialist', 'Next.js Developer'],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pt-24 pb-12">
      {/* animated background blobs */}
      <div className="bg-blob -top-20 -left-20 h-72 w-72 bg-purple-300" />
      <div className="bg-blob top-1/3 -right-24 h-80 w-80 bg-pink-200" style={{ animationDelay: '-5s' }} />
      <div className="bg-blob bottom-0 left-1/3 h-64 w-64 bg-fuchsia-200" style={{ animationDelay: '-9s' }} />

      <div className="relative flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 md:flex-row">
        {/* Left: Text */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700"
          >
            <span className="inline-block origin-[70%_70%] animate-[wave_2s_ease-in-out_infinite]">👋</span>
            Hi, I&apos;m Abdelmonem Ahmed
          </motion.span>

          <motion.h1 variants={item} className="text-4xl font-extrabold leading-tight md:text-5xl">
            I&apos;m a <br className="md:hidden" />
            <span className="gradient-text">{text}</span>
            <Cursor cursorColor="#9333ea" />
          </motion.h1>

          <motion.p variants={item} className="mx-auto max-w-md text-gray-600 md:mx-0">
            Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4 md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-linear-to-r from-purple-700 to-fuchsia-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/30"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-purple-600 px-7 py-3 font-semibold text-purple-700 transition-colors hover:bg-purple-600 hover:text-white"
            >
              My Projects
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={item} className="flex justify-center gap-4 md:justify-start">
            {socials.map(({ icon, label, link }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -6, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-colors hover:bg-purple-600 hover:text-white"
              >
                <FontAwesomeIcon icon={icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
            <div className="profile-ring absolute -inset-2" />
            <div className="profile-blob relative h-full w-full border-4 border-white bg-white shadow-2xl">
              <Image
                src={profileImage}
                alt="Abdelmonem Ahmed"
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 420px, 320px"
                className="h-full w-full object-cover object-[50%_40%] transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-purple-400 pt-2 md:flex"
      >
        <span className="h-2 w-1 animate-bounce rounded-full bg-purple-600" />
      </a>
    </section>
  );
}
