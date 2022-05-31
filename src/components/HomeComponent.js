import '../css/main.css';
import Navbar from "./NavbarComponent";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
    </div>
  )
}

export default HomeComponent;