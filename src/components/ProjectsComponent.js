import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";

const ProjectsComponent = () => {
  return (
    <div>
      <NavbarComponent/> 
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://picsum.photos/id/1/200/300" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
              circle
            />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/thumbnail.png" thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsComponent;
