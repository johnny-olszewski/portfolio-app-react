import LandingComponent from "@/components/landing-component/LandingComponent";
import ExperienceComponent from "@/components/experience-component/ExperienceComponent";
import AboutMeComponent from "@/components/about-me-component/AboutMeComponent";
import ProjectsComponent from "@/components/projects-component/ProjectsComponent";
import ContactComponent from "@/components/contact-component/ContactComponent";
import BackgroundComponent from "@/components/background-component/BackgroundComponent";

export default function Home() {
  return (
    <>
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
    </>
  );
}
