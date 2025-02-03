import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Created a modern, responsive personal portfolio website using React and TypeScript, showcasing projects, skills, and experiences with an optimized UI/UX design. Integrated dynamic components, reusable code, and seamless navigation for an engaging user experience.",
    image: "/projectThumbnail/personal-portfolio.png",
    techstack: "React, Tailwind CSS, TypeScript",
    linkOfProject: "",
    githubLink: "",
  },
  {
    title: "Realty Connect",
    description:
      "Realty Connect is a live project where real estate agents can create, manage, and track referrals seamlessly. The platform enables agents to connect with clients, facilitate property deals, and earn commissions efficiently through a streamlined process.",
    image: "/projectThumbnail/realty-connect.png",
    techstack: "React.js, Material UI, GraphQL",
    linkOfProject: "",
    githubLink: "",
  },
  {
    title: "Atithi - Hotel Booking App",
    description:
      "Built 'Atithi', a MERN stack hotel booking platform with advanced search, filtering, and secure payment integration using Stripe. The app features user authentication, a wishlist system, and an admin panel for property approval and management.",
    image: "path/to/project1.jpg",
    techstack: "React, Node.js, Express, MongoDB",
    linkOfProject: "",
    githubLink: "",
  },
];

const ProjectSection = () => {
  return (
    <section className="min-h-screen bg-slate-800 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block mb-12 flex justify-center ">
          <h2
            className="text-3xl md:text-3xl lg:text-4xl px-2  font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50)",
            }}
          >
            MY PROJECTS
          </h2>
        </div>
      </div>
      <div className="text-2xl text-white flex justify-center">
        {/* <h1 className="text-2xl sm:text-xl md:text-5xl font-bold">
          PROJECTS WILL{" "}
          <span className="text-pink-500 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to bottom right, #ff7eb3, #ff758c, #ff7a50)" }}>
            <Typewriter
              words={["COME SOON..."]}
              loop={0} // Number of times the animation loops (set to `0` for infinite)
              cursor
              cursorStyle=""
              typeSpeed={200} // Speed at which text is typed
              deleteSpeed={150} // Speed at which text is deleted
              delaySpeed={1500} // Delay before retyping
            />
          </span>
        </h1> */}
        <div className="flex flex-wrap justify-center gap-8 p-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techstack={project.techstack}
              linkOfProject={project.linkOfProject}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
