// import Image from "next/image"
import { Snackbar } from "@mui/material";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techstack: string;
  linkOfProject: string;
  githubLink: string;
  index: number;
}

export default function ProjectCard({ title, description, image, techstack, linkOfProject, githubLink, index }: ProjectCardProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkOfProject || !githubLink) {
      e.preventDefault(); // Prevent navigation
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <div className="bg-slate-900/50 rounded-xl w-96 overflow-hidden border border-slate-800 group hover:border-slate-700 transition-all duration-300" data-aos="fade-up" data-aos-duration="1500" data-aos-delay={index * 300}>
      <div className="relative h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r from-pink-500 to-blue-500 group-hover:text-transparent bg-clip-text transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold">Tech Stack:</span>
            <span className="text-gray-300 text-sm">{techstack}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-2">
          <a
            href={linkOfProject || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium"
            onClick={handleClick}
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
          <a
            href={githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-900 transition-all duration-300 text-sm font-medium group/github"
            onClick={handleClick}
          >
            <Github className="w-4 h-4 group-hover/github:text-purple-500 transition-colors duration-300" />
            GitHub Repo
          </a>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            message="Sorry for inconvenience! This project is not available for public viewing at the moment."
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        </div>
      </div>
    </div>
  );
}
