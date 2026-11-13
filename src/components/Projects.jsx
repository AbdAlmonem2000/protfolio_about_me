'use client';

import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FaGithub, FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: 'Fresh Cart — eCommerce',
    description: 'eCommerce web app using React & .NET Core API, JWT auth, Stripe payment, React Query, Formik, Tailwind.',
    image: '/freshcart.png',
    link: 'https://github.com/AbdAlmonem2000/ecommerceProject',
    tags: ['React', '.NET', 'Stripe'],
  },
  {
    title: 'NBC NEWS — News',
    description: 'News app built using React.js, Context, Redux, Axios & React Bootstrap. Fully responsive.',
    image: '/nbcnews.png',
    link: 'https://github.com/AbdAlmonem2000/News_.git',
    tags: ['React', 'Redux', 'Bootstrap'],
  },
  {
    title: 'Games — Game Hub',
    description: 'Games site using React.js, Tailwind, Axios, Formik, YUP, React Spinners.',
    image: '/games.png',
    link: 'https://github.com/AbdAlmonem2000/Games_',
    tags: ['React', 'Tailwind', 'Formik'],
  },
  {
    title: 'Logistic — Company Site',
    description: 'Next.js + Tailwind, Framer Motion, SEO optimized, EmailJS integration, responsive blog with keywords.',
    image: '/logistic.png',
    link: 'https://github.com/AbdAlmonem2000/Logistic.git',
    tags: ['Next.js', 'Framer Motion', 'SEO'],
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-4xl font-extrabold" data-aos="fade-down">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div data-aos="fade-up">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.title} className="px-4 pt-3 pb-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group block w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-50 text-left shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-200"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-purple-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="translate-y-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-700 transition-transform duration-300 group-hover:translate-y-0">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-purple-700">{project.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-12 rounded-2xl bg-gray-50 p-7 shadow-md" data-aos="zoom-in-up">
          <p className="mx-auto max-w-2xl text-sm text-gray-600 md:text-base">
            These projects showcase my ability to build scalable, responsive, and user-friendly applications using modern frontend
            technologies. Each project reflects my commitment to writing clean code, focusing on performance, and delivering
            high-quality user experiences.
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 data-closed:opacity-0"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative w-full max-w-md space-y-4 rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 data-closed:scale-90 data-closed:opacity-0"
          >
            {selectedProject && (
              <>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-600 shadow transition hover:rotate-90 hover:text-purple-700"
                >
                  <FaTimes />
                </button>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={300}
                  className="h-56 w-full rounded-xl object-cover"
                />
                <DialogTitle className="text-xl font-bold text-gray-800">{selectedProject.title}</DialogTitle>
                <p className="text-gray-600">{selectedProject.description}</p>
                <div className="flex justify-end">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-700 to-fuchsia-600 px-5 py-2 font-semibold text-white transition hover:scale-105"
                  >
                    <FaGithub /> Open Project
                  </a>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}
