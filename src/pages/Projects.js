import React from "react";
import "../Projects.css"; 
// import project1 from "../images/project1.png";
// import project2 from "../images/project2.png";
// import project3 from "../images/project3.png";
import { Link } from "react-router-dom";
import logo from "../images/jrc6.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills.",
    // image: project1,
    link: "https://myportfolio.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack MERN e-commerce site with authentication.",
    // image: project2,
    link: "https://myecommerce.com",
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "A productivity tool for managing daily tasks effectively.",
    // image: project3,
    link: "https://taskmanager.com",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "A full-stack MERN e-commerce site with authentication.",
    // image: project2,
    link: "https://myecommerce.com",
  },
  {
    id: 5,
    title: "Task Manager App",
    description: "A productivity tool for managing daily tasks effectively.",
    // image: project3,
    link: "https://taskmanager.com",
  },
];

function Projects() {
  return (
    <div>
    <header className="navbar">
      
        <nav>
          <ul className="nav-links">
          
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <img src={logo} alt="Logo" className="logo" />
            </li>
            
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    <div className="projects-container">
    <div className="animated-background"></div>
      <h1>My Projects</h1>
      <p>Here are some of my recent works.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;

