//
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/Home/Home";
import AboutPage from "../pages/AboutSection";
import ExperiencePage from "../pages/ExperiencePage";
import CareerPage from "../pages/CareerPage";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // Default route for "/"
      { path: "career", element: <CareerPage /> },
      { path: "about", element: <AboutPage /> }, 
      { path: "projects", element: <ProjectsPage /> }, 
      { path: "experience", element: <ExperiencePage /> },
      { path: "contact-me", element: <ContactPage /> },
      { path: "*", element: <PageNotFound /> }, // Catch-all route
    ],
  },
]);

export default router;
