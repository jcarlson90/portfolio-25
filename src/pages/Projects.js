import React from "react";
import "../Projects.css"; 
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import { Link } from "react-router-dom";
import logo from "../images/jrc6.png";

const projects = [
  {
    id: 1,
    title: "⚡Portfolio Website⚡",
    description: "Portfolio showcasing my projects and skills.",
    image: project1,
    link: "https://github.com/jcarlson90/portfolio-25/tree/main",
  },
  {
    id: 2,
    title: "⚡Patient Mgmt System⚡",
    description: "Administrative tool for scheduling appointments.",
    image: project2,
    link: "https://github.com/jcarlson90/patient_management",
  },
  {
    id: 3,
    title: "⚡Music Streaming Platform⚡",
    description: "Spotify Clone using third party API integration.",
    image: project3,
    link: "https://github.com/jcarlson90/music_player_app",
  },
  {
    id: 4,
    title: "⚡Hanalei Holistics⚡",
    description: "Holistics therapy scheduling center for client",
    image: project4,
    link: "https://github.com/jcarlson90/hanalei-holistics",
  },
  {
    id: 5,
    title: "⚡Funny Sound Board⚡",
    description: "Simple sound board with funny sounds from YouTube.",
    image: project5,
    link: "https://github.com/jcarlson90/funny-sounds",
  },
  {
    id: 6,
    title: "⚡Rhythm Wireless Intern⚡",
    description: "Hot spot to earn money for unused internet",
    image: project6,
    link: "https://rhythmwireless.io/",
  },
];

function Projects() {
  return (
    <div>
     {" "}
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
      <div>

      <div className="projects-container">
        <div className="animated-background"></div>
        <h1>My Projects</h1>
        <p>⚡Here are some of my recent works.</p>
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
        <div className="home-sci">
        <a href="https://www.linkedin.com/in/jcarlson90/">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://github.com/jcarlson90">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://soundcloud.com/oudus">
          <i className="bx bxl-soundcloud"></i>
        </a>
        <a href="https://www.instagram.com/oudusjake/">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
      </div>
      </div>

    </div>
  );
}

export default Projects;
