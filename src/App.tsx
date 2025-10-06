import LandingComponent from "./pages/main/landing-component";
import "./App.css";
import ExperienceComponent from "./pages/main/experience-component";
import AboutMeComponent from "./pages/main/about-me-component";
import ProjectsComponent from "./pages/main/projects-component";
import ContactComponent from "./pages/main/contact-component";

function App() {
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="w-full">
        <LandingComponent />
      </div>
      <div className="w-full">
        <AboutMeComponent />
      </div>
      <div className="w-full">
        <ExperienceComponent />
      </div>
      <div className="w-full">
        <ProjectsComponent />
      </div>
      <div className="w-full">
        <ContactComponent />
      </div>
    </div>
  );
}

export default App;
