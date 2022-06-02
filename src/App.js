import "./css/main.css";
import Navbar from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";
import ContactComponent from "./components/ContactComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
      <div>
          <BrowserRouter>
          <div className="App">
            <Routes>
              <Route
                exact
                path="/"
                element={<HomeComponent/>}
                data-testid="homeComponentRoute"
              />
              <Route
                exact
                path="/projects"
                element={<ProjectsComponent/>}
                data-testid="projectsComponentRoute"
              />
              <Route
                path="/contact"
                elementt={<ContactComponent/>}
                data-testid="contactComponentRoute"
              />
            </Routes>
          </div>
        </BrowserRouter>
        {/* <ContactComponent/> */}
      </div>
  );
}

export default App;
