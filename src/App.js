import "./css/main.css";
import Navbar from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";
import ContactComponent from "./components/ContactComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
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
              data-testid="randomRecipeComponentRoute"
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/contact"
              component={ContactComponent}
              data-testid="mealPlannerComponentRoute"
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
