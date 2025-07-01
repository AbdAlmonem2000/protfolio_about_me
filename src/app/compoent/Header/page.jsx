'use client';

import React from 'react';
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import profileImage from '../../../../public/profile.jpg'; // تأكد من المسار الصحيح

export default function Header() {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Specialist'],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 pt-16" id='home'>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full">

        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6 mt-6" data-aos="fade-right" data-aos-duration="700">
          <span className="bg-yellow-700 text-white px-4 py-1 rounded-full font-light text-xs">
          <span className='text-yellow-400'>|</span> Abdelmonem Ahmed</span>
          <h1 className=" font-bold mt-2 md:text-xxl text-5xl">
            I'm <span className="text-purple-600 md:text-4xl text-2xl">{text}</span>
            <Cursor />
          </h1>
          <p className="text-gray-600 max-w-md">
            - Experienced frontend developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>

          {/* Buttons */}
          

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            {[
              { icon: faInstagram, link: 'https://www.instagram.com/3body_sal?igsh=Z2hoZGtscmM5aDR2 ' },
              { icon: faLinkedinIn, link: 'https://www.linkedin.com/in/abod-ahmed-45398b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' },
              { icon: faGithub, link: 'https://github.com/AbdAlmonem2000' },
              { icon: faWhatsapp, link: 'https://wa.me/966538259830' },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition bg-white shadow p-3 rounded-full hover:-translate-1 "
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center ">
          <Image
            src={profileImage}
            alt="My Photo"
            className="rounded-full object-cover shadow-2xl animate-bounce-slow hover:scale-105 transition duration-500 image "
            
          />
        </div>
      </div>
    </section>
  );
}
