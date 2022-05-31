import "./css/main.css";
import Navbar from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";
import ContactComponent from "./components/ContactComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div>
          <Router>
          <div className="App">
            <Routes>
              <Route
                exact
                path="/"
                component={HomeComponent}
                data-testid="homeComponentRoute"
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/projects"
                component={ProjectsComponent}
                data-testid="projectsComponentRoute"
              />
            </Routes>
            <Routes>
              <Route
                exact
                path="/contact"
                component={ContactComponent}
                data-testid="contactComponentRoute"
              />
            </Routes>
          </div>
        </Router>
        {/* <HomeComponent/> */}
        <ContactComponent/>
      </div>
  );
}

export default App;
