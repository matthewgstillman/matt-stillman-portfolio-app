import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
// import mainImage from "../Images/removeBackgroundPhoto";

const ProjectsComponent = () => {
  return (
    <div>
      <NavbarComponent/> 
      <Container>
      <Image
                data-testid="homeHeaderImage"
                className="home-component-image"
                src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"
                // src={mainImage}
                />
                <br />
      </Container>
    </div>
  );
};

export default ProjectsComponent;
