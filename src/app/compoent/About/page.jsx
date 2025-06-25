'use client';


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faJs, faBootstrap, faReact,faGitAlt, faGithub, faWordpress, faSass, faGoogle} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {faCode, faDatabase, faCodeBranch,faGlobe, faBolt, faPuzzlePiece, faNetworkWired} from '@fortawesome/free-solid-svg-icons';

import Slider from 'react-slick';

export default function About() {


  AOS.init();




  const skills = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'BOOTSTRAP5', icon: faBootstrap },
    { name: 'REACT', icon: faReact },
    { name: 'NEXT.JS', icon: faReact },
    { name: 'Tailwind', icon: faCss3Alt },
    { name: 'JQuery', icon: faCode },
    { name: 'AJAX', icon: faNetworkWired },
    { name: 'RESTFUL APIS', icon: faGlobe },
    { name: 'REGULAR EXPRESSION', icon: faCode },
    { name: 'TypeScript', icon: faJs },
    { name: 'SASS', icon: faSass },
    { name: 'OOP', icon: faPuzzlePiece },
    { name: 'GIT/GITHUB', icon: faGithub },
    { name: 'SEO', icon: faGoogle },
    { name: 'WORDPRESS', icon: faWordpress },
    { name: 'REDUX', icon: faCodeBranch },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-40 bg-gray-50 px-6" id="about" data-aos="fade-up" data-aos-duration="700">
      <div className="max-w-6xl mx-auto  flex-col md:flex-row gap-12 items-center">

        {/* Left: Description */}
        <div className="flex-1 space-y-6 text-center md:text-left  bg-gray-100 p-11 rounded-md shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800 pb-11">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            I am a passionate and detail-oriented frontend developer with strong knowledge in modern web technologies. I enjoy turning complex problems into elegant and user-friendly interfaces. My skill set includes everything from semantic HTML and responsive design, to modern frameworks like React and Next.js, and best practices in SEO and Git version control.
          </p>
        </div>

        {/* Right: Skills Slider */}
        <div className="flex-1 w-full py-16">
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index} className="p-3">
                <div className="flex flex-col items-center justify-center text-center bg-white rounded-full w-28 h-28 mx-auto shadow hover:shadow-lg transition">
                  <FontAwesomeIcon icon={skill.icon} className="text-2xl text-purple-600 mb-1" />
                  <span className="text-xs font-semibold text-gray-700">{skill.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
