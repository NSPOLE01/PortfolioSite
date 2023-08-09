import { BrowserRouter as Router } from "react-router-dom";
import AppFooter from "./components/shared/AppFooter";
import AppBanner from "./components/shared/AppBanner";
import { ProjectsProvider } from "./context/ProjectsContext";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import AboutMe from "./context/AboutMe";

import "./css/App.css";

function App() {
  return (
    <Router>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <div className="container mx-auto">
          <AppBanner></AppBanner>

          <ProjectsProvider>
            <ProjectsGrid></ProjectsGrid>
          </ProjectsProvider>

          <AboutMe />
        </div>

        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
