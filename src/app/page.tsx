import LandingComponent from "@/components/landing-component/LandingComponent";
import ExperienceComponent from "@/components/experience-component/ExperienceComponent";
import AboutMeComponent from "@/components/about-me-component/AboutMeComponent";
import ProjectsComponent from "@/components/projects-component/ProjectsComponent";
import ContactComponent from "@/components/contact-component/ContactComponent";
import BackgroundComponent from "@/components/background-component/BackgroundComponent";

export default function Home() {
  return (
    <>
      <BackgroundComponent backgroundColor="bg-white">
        <div className="w-full">
          <LandingComponent />
        </div>
      </BackgroundComponent>
      <div className="w-full">
        <AboutMeComponent />
      </div>
      <BackgroundComponent
        backgroundColor="bg-white"
        images={[
          {
            src: "/images/corner-leaves-top-right.png",
            alt: "Corner Leaves Top Right",
            width: 1024,
            height: 1024,
            position: "top-right",
            size: "w-[60vh] h-auto",
            opacity: 20,
          },
        ]}
      >
        <div className="w-full">
          <ExperienceComponent />
        </div>
      </BackgroundComponent>
      <BackgroundComponent
        backgroundColor="bg-white"
        images={[
          {
            src: "/images/monstera-bottom-left.png",
            alt: "Monstera Bottom Left",
            width: 1024,
            height: 1024,
            position: "bottom-left",
            size: "h-[80vh] w-auto",
            opacity: 20,
          },
        ]}
      >
        <div className="w-full">
          <ProjectsComponent />
        </div>
      </BackgroundComponent>
      <div className="w-full">
        <ContactComponent />
      </div>
    </>
  );
}
