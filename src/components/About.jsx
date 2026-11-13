'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faGithub, faWordpress, faSass, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCodeBranch, faGlobe, faPuzzlePiece, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

const skills = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'Bootstrap 5', icon: faBootstrap },
  { name: 'React', icon: faReact },
  { name: 'Next.js', icon: faReact },
  { name: 'Tailwind', icon: faCss3Alt },
  { name: 'jQuery', icon: faCode },
  { name: 'AJAX', icon: faNetworkWired },
  { name: 'RESTful APIs', icon: faGlobe },
  { name: 'Regex', icon: faCode },
  { name: 'TypeScript', icon: faJs },
  { name: 'SASS', icon: faSass },
  { name: 'OOP', icon: faPuzzlePiece },
  { name: 'Git / GitHub', icon: faGithub },
  { name: 'SEO', icon: faGoogle },
  { name: 'WordPress', icon: faWordpress },
  { name: 'Redux', icon: faCodeBranch },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

export default function About() {
  return (
    <section id="about" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-extrabold" data-aos="fade-down">
          About <span className="gradient-text">Me</span>
        </h2>

        <div
          className="rounded-2xl border border-purple-100 bg-white p-8 shadow-lg transition-shadow duration-500 hover:shadow-purple-200 md:p-11"
          data-aos="fade-up"
        >
          <p className="text-justify leading-relaxed text-gray-600">
            I am a passionate and detail-oriented frontend developer with strong knowledge in modern web technologies. I enjoy
            turning complex problems into elegant and user-friendly interfaces. My skill set includes everything from semantic HTML
            and responsive design, to modern frameworks like React and Next.js, and best practices in SEO and Git version control.
          </p>
        </div>

        <h3 className="mt-16 text-center text-2xl font-bold text-gray-800" data-aos="fade-up">
          Skills
        </h3>
        <div className="w-full py-10" data-aos="fade-up" data-aos-delay="100">
          <Slider {...settings}>
            {skills.map((skill) => (
              <div key={skill.name} className="p-3">
                <div className="group mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-center shadow transition-all duration-300 hover:-translate-y-2 hover:bg-linear-to-br hover:from-purple-600 hover:to-fuchsia-500 hover:shadow-xl hover:shadow-purple-300">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="mb-1 text-2xl text-purple-600 transition-all duration-300 group-hover:scale-125 group-hover:text-white"
                  />
                  <span className="text-xs font-semibold text-gray-700 transition-colors group-hover:text-white">{skill.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
