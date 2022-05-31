import '../css/main.css';
import NavbarComponent from "./NavbarComponent";
import { Container, Row, Col, Image } from "react-bootstrap";

const HomeComponent = () => {
  return (
    <div>
      <NavbarComponent />
        <div className="container">
            <Image
                data-testid="homeHeaderImage"
                className="home-component-image"
                src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"
                />
                <br />
        </div>
        <div className="paragraph-container">
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
        </div>
    </div>
  )
}

export default HomeComponent;