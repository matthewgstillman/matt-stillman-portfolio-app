import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import "../css/main.css";
import profilePic from "../Images/profilePic.jpg";
import omdb from "../Images/omdbProjectScreenshot.png";

const ProjectsComponent = () => {
  return (
    <div>
      <NavbarComponent/>
        <div class="flip-card" tabIndex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={omdb} height="380" />
            </div>
            <div class="flip-card-back">
              <a href="https://main.d22bh3gff8l7ye.amplifyapp.com/">OMDB API Project</a>
            </div>
          </div>
          <br />
          <div class="flip-card-2" tabIndex="0">
          <div class="flip-card-2-inner">
            <div class="flip-card-2-front">
              <img src={omdb} height="380" />
            </div>
            <div class="flip-card-2-back">
              <a href="https://main.d22bh3gff8l7ye.amplifyapp.com/">OMDB API Project</a>
            </div>
          </div>
       </div>
       </div>
    </div>
  );
};

export default ProjectsComponent;
