import { Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react";
import { isValidElement } from "react";
import { FaAngular, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { Img } from "react-image";
import AboutImage from "../../assets/about_page.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/sumatjain18", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sumat-jain-6a8236166/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sumat.jain_", label: "Instagram" },
  // { icon: WhatsApp, href: "https://wa.me/+918275726908", label: "WhatsApp" },
  { icon: Mail, href: "mailto:jsumat@outlook.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
];

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
  { name: "Vue", icon: <FaVuejs className="text-emerald-500 w-10 h-10" /> },
  { name: "Angular", icon: <FaAngular className="text-red-500 w-10 h-10" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300 w-10 h-10" /> },
  { name: "Node.js", icon: <IoLogoNodejs className="text-green-700 w-10 h-10" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 w-10 h-10" /> },
  { name: "GraphQL", icon: <GrGraphQl className="text-pink-500 w-10 h-10" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-10 h-10" /> },
  { name: "Express", icon: <SiExpress className="text-white w-10 h-10" /> },
  { name: "GitHub", icon: <FaGithub className="text-blue-500 w-10 h-10" /> },
  // { name: "Heroku", icon: <GrHeroku /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 w-10 h-10" /> },
  { name: "CSS3", icon: <IoLogoCss3 className="text-blue-700 w-10 h-10" /> },
];

interface AboutSectionProps {
  name: string;
  description: string[];
}

const aosAttributes = {
  "data-aos": "fade-up",
  "data-aos-duration": "1500",
};

export default function AboutSection({ name, description }: AboutSectionProps) {
  return (
    <section className="min-h-screen bg-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start" >
          <div>
            <div className="inline-block mb-12">
              <h2
                className="text-2xl md:text-3xl lg:text-3xl border-s-4 px-2  font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50)",
                }}
              >
                ABOUT ME
              </h2>
            </div>

            <h1 className="text-4xl font-bold text-white mb-6" {...aosAttributes}>Hello! My name is {name}</h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8" {...aosAttributes}>{description}</p>

            <div className="space-y-4" {...aosAttributes}>
              <h3 className="text-gray-300 text-xl font-semibold">Some of the Stack I know</h3>
              <div className="grid grid-cols-6 gap-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="bg-slate-600/50 p-3 rounded-lg hover:bg-slate-900 hover:animate-bounce duration-500 transition-colors flex items-center justify-center">
                    {isValidElement(tech.icon) ? (
                      // Render JSX element directly
                      tech.icon
                    ) : (
                      // Render image if it's a string
                      <Img src={"/placeholder.svg"} alt={tech.name} width={40} height={40} className="w-full h-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative" {...aosAttributes}>
            <img src={AboutImage} alt="Programming illustration" width={600} height={600} className="w-full h-auto rounded-lg hover:scale-110 duration-200" />
          </div>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-4 mb-12 mt-20 text-gray-300" {...aosAttributes}>
          <span className="text-2xl font-semibold">Connect with me :</span>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label={social.label}>
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
