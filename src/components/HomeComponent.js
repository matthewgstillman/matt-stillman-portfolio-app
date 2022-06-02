import '../css/main.css';
import NavbarComponent from "./NavbarComponent";
import { Container, Row, Col, Image } from "react-bootstrap";
import SocialIcons from './SocialIcons';

const HomeComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <Image
          fluid
          data-testid="homeHeaderImage"
          className="home-component-image"
          src="https://drive.google.com/uc?export=view&id=1nDgCB-2NjG0MUMxdogTHvHC8OnVZr1ZE"
      /> 
            {/* <Image
                data-testid="homeHeaderImage"
                className="home-component-image"
                src="https://drive.google.com/uc?export=view&id=1nDgCB-2NjG0MUMxdogTHvHC8OnVZr1ZE"
            /> */}
        <div className="about-paragraph__container">
              <h1>About</h1>
              <p className="about-parahraph">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
              No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is 
              pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses
              to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
        </div>
      </div>
  )
}

export default HomeComponent;