import React, { useEffect, useState } from "react";
import profileImage from "../../assets/sumat-image.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const downloadResume = () => {
  const fileUrl = "/Documents/Sumat_Jain_Resume.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Sumat Jain Resume - 8275726908.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="absolute mb-0 inset-0 z-0 h-screen"
        animate={{
          backgroundImage: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
        }}
      />
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 mt-8 sm:mt-12 lg:mt-16">
            <h1 className="text-2xl sm:text-xl md:text-5xl font-bold">
              Welcome to my{" "}
              <span className="text-pink-500 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to bottom right, #ff7eb3, #ff758c, #ff7a50)" }}>
                <Typewriter
                  words={["Portfolio!", "World!", "Space!"]}
                  loop={0} // Number of times the animation loops (set to `0` for infinite)
                  cursor
                  cursorStyle=""
                  typeSpeed={200} // Speed at which text is typed
                  deleteSpeed={150} // Speed at which text is deleted
                  delaySpeed={1500} // Delay before retyping
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 tracking-wider">
              I am a front-end developer with 1.5 years of proven experience in the field. I am skilled in Search Engine Optimization, Next.js, React.js, Angular, Tailwind CSS, Material-UI, JavaScript
              and Typescript. I am passionate about creating interactive and beautiful user interfaces, along with the required functionalities on the front end.
              <br />
              One of my favorite technologies to work with is React.js, particularly within the <span className="bg-gray-700 text-green-400 text-sm px-2 py-0.5 rounded-2xl">MERN / MEAN</span> stack.
              <br />
              My expertise includes <span className="text-yellow-400">React.js ✨</span> & Angular for high-scale application development.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <a href="mailto:jsumat@outlook.com" target="blank">
                <button
                  className="text-white px-6 py-2  text-lg font-semibold hover:scale-90 transition duration-300"
                  style={{ backgroundImage: "linear-gradient(to bottom right, #ff7eb3, #ff758c, #ff7a50)", borderWidth: "2px", borderImage: "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50) 1" }}
                >
                  Hire me
                </button>
              </a>
              <button
                className=" text-white px-6 py-2 text-lg font-semibold hover:bg-gray-700 hover:scale-90 transition duration-300"
                style={{ borderWidth: "2px", borderImage: "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50) 1" }}
                onClick={downloadResume}
              >
                My Resume <span className="ml-2">⬇</span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 mb-8 md:mb-0 flex justify-center">
            <div className="relative group">
              <div
                className="bg-pink-300 w-full sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 -z-0 scale-125 group-hover:-rotate-90 transition duration-700"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  backgroundImage: "linear-gradient(to bottom right, #ff7eb3, #ff758c, #ff7a50)",
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="w-64 sm:w-80 h-64 sm:h-80 md:w-80 md:h-80 z-10 absolute top-2/4 left-2/4 rounded-lg -translate-x-2/4 -translate-y-2/4  duration-500 persp">
                <img
                  src={profileImage} // Replace with your image URL
                  alt="Profile"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
