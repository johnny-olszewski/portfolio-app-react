import LandingComponent from "./pages/main/landing-component";
import "./App.css";
import ExperienceComponent from "./pages/main/experience-component";
import AboutMeComponent from "./pages/main/about-me-component";
import ProjectsComponent from "./pages/main/projects-component";
import ContactComponent from "./pages/main/contact-component";
import BackgroundComponent from "./pages/main/background-component";
import HeaderComponent from "./pages/main/header-component";

function App() {
  return (
    <HeaderComponent>
      <BackgroundComponent>
        <div className="w-full">
          <LandingComponent />
        </div>
      </BackgroundComponent>
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
    </HeaderComponent>
  );
}

export default App;
