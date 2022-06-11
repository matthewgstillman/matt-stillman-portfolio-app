import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import "../css/main.css";
import profilePic from "../Images/profilePic.jpg";

const ProjectsComponent = () => {
  return (
    <div>
      <NavbarComponent/>
      <div class="flip-card" tabIndex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={profilePic} alt="" />
        </div>
        <div class="flip-card-back">
          <h3>Whoaaa!!!</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectsComponent;
