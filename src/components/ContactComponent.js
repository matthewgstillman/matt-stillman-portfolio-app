import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavbarComponent from "./NavbarComponent";
import { Form, Button, Container } from "react-bootstrap";

const ContactComponent = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_wr3t9ob",
        "template_sraud5k",
        event.target,
        "u09K_1ArMiDKCSBWY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div>
      <NavbarComponent /> 
        <Container>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
    </div>
  );
};

export default ContactComponent;
