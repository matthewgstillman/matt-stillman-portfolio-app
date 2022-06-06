import "./css/main.css";
import HomeComponent from "./components/HomeComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import ContactComponent from "./components/ContactComponent";
import ContactFormComponent from "./components/ContactFormComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
      <div>
          <BrowserRouter>
          <div className="App">
            <Routes>
              <Route
                exact
                path="/"
                data-testid="homeComponentRoute"
                element={<HomeComponent/>}
              />
              <Route
                exact
                path="/projects"
                element={<ProjectsComponent/>}
                data-testid="projectsComponentRoute"
              />
              <Route
                exact
                path="/contact"
                element={<ContactFormComponent/>}
                data-testid="contactComponentRoute"
              />
            </Routes>
          </div>
        </BrowserRouter>
\      </div>
  );
}

export default App;
