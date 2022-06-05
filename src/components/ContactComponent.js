import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavbarComponent from "./NavbarComponent";

const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event
      .preventDefault(
        "service_wr3t9ob",
        "template_sraud5k",
        form.current,
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
  };

//   emailjs.sendForm();
  return (
    <div>
        <NavbarComponent/>
        <h1>NewContactComponent</h1>
    </div>
  )
}

export default ContactComponent;