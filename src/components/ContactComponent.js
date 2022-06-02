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

  emailjs.sendForm();
  // const [senderName, setSenderName] = useState("");
  // const [senderEmail, setSenderEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleName = (event) => {
  //   setSenderName = event.target.value;
  // }

  // const handleEmail = (event) => {
  //   setSenderEmail = event.target.value;
  // }

  // const handleMessage = (event) => {
  //   setMessage = event.target.value;
  // }

  // const sendMail = (event) => {
  //   event.preventDefault();
  //   send(
  //     'service_wr3t9ob',
  //     'template_sraud5k',
  //     {senderName, senderEmail, message},
  //     'u09K_1ArMiDKCSBWY'
  //   )
  //   .then((response) => {
  //     console.log('Message sent successfully', response.status, response.text);
  //   })
  //   .catch((error) => {
  //     console.log('Failed', error);
  //   })
  // }

  return (
    <div>
      {/* <h1>Contact Me</h1>
      <form onSubmit={sendMail}>
        <input type="text" name="senderName" placeholder="Your Name" value={senderName} onChange={handleName} required />
        <input type="email" name="senderEmail" placeholder="Your Email Address" value={senderEmail} onChange={handleEmail}required/>
        <textarea name="message" placeholder="Your Message" value={message} onChange={handleMessage} required></textarea>
        <button type="submit">Submit</button>
      </form> */}
      {/* {/* <NavbarComponent/> */}
      <div className="container">
        {/* <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
