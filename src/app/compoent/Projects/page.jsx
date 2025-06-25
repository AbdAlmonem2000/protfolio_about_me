'use client';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Dialog } from '@headlessui/react'; // مكتبة Headless UI للـ modal


export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Fresh Cart — ECommerce Project',
      description: 'eCommerce web app using React & .NET Core API, JWT auth, Stripe payment, React Query, Formik, Tailwind.',
      image: '/freshcart.png',
      link: 'https://github.com/AbdAlmonem2000/ecommerceProject',
    },
    {
      title: 'NBC NEWS — News Project',
      description: 'News app built using React.js, Context, Redux, Axios & React Bootstrap. Fully responsive.',
      image: '/nbcnews.png',
      link: 'https://github.com/AbdAlmonem2000/News_.git',
    },
    {
      title: 'Game Project — Games',
      description: 'Games site using React.js, Tailwind, Axios, Formik, YUP, React Spinners.',
      image: '/games.png',
      link: 'https://github.com/AbdAlmonem2000/Games_',
    },
    {
      title: 'Logistic Project — Logistic',
      description: 'Next.js + Tailwind, Framer Motion, SEO optimized, EmailJS integration, responsive blog with keywords.',
      image: '/logistic - Copy.png',
      link: 'https://github.com/AbdAlmonem2000/Logistic.git',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return <>
  
    
    <section className="py-20 bg-white px-6" id="projects">
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">My Projects</h2>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-purple-700">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>


        <div className='bg-gray-100 p-7 rounded-md shadow-md mt-11' data-aos="zoom-in-up" data-aos-duration="700">

          <p className=" text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            These projects showcase my ability to build scalable, responsive, and user-friendly applications using modern frontend technologies. Each project reflects my commitment to writing clean code, focusing on performance, and delivering high-quality user experiences.
          </p>

        </div>



        {/* Modal Popup */}
        {selectedProject && (
          <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="max-w-md w-full bg-white rounded-lg shadow-xl p-6 space-y-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={300}
                  className="rounded-md w-full h-56 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">{selectedProject.title}</h3>
                <p className="text-gray-600">{selectedProject.description}</p>
                <div className="flex justify-end">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                  >
                    Open Project
                  </a>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>

        )}
      </div>

    </section>

  </>;
}
