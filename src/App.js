import "./css/main.css";
import HomeComponent from "./components/HomeComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import NewContactFormComponent from "./components/NewContactFormComponent";
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
                element={<NewContactFormComponent/>}
                data-testid="contactComponentRoute"
              />
            </Routes>
          </div>
        </BrowserRouter>
\      </div>
  );
}

export default App;
