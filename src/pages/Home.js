import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/jrc6.png";
import pic from "../images/pic2.png";


function Home() {
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
      
        <div className="home">
        <div className="animated-background"></div>
      {/* <h1 className="welcome">Welcome to My Portfolio</h1> */}
          <div className="home-content">
              <h1>
                
                Jake R. Carlson
              </h1>
              <h3> ⚡ Full-Stack Developer ⚡ </h3>
              <p1 className="intro">
                A passion for transforming creative ideas into functional web
                solutions.
              </p1>
              <section className="bullets">
              <p className="b1">
              ⚡Full-Stack Web Applications.
              </p>
              <p className="b2">
              ⚡API integration with third-party services.
              </p>
              <p className="b3">
              ⚡Front-end skills in HTML, CSS, JavaScript, and React.
              </p>
              <p className="b4">
              ⚡Version control using Git and GitHub.
              </p>
              <p className="b5">
              ⚡Strong database management expertise in MongoDB, including schema design, query optimization, and CRUD operations.
              </p>
              <p className="b6">
              ⚡Advanced state management with React Context and Redux.
              </p>
              <p className="b7">
              ⚡Passionate about continuous improvement and best practices in web development.
              </p>
              
              </section>
             
             
            </div>
            
            <img src={pic} alt="Logo" className="logo2" />
        </div>
        <div className="btn-box">
        <a href="https://docs.google.com/document/d/1Un14FpqpFKFEKMMbYoGE1grHkWoDsufvslLMO10GMug/edit?tab=t.0">
          Hire Me
        </a>
        <a href="mailto:jake.carlson90@gmail.com">Let's Chat</a>
      </div>
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
  );
}

export default Home;
