import LandingComponent from "./pages/main/landing-component";
import "./App.css";
import ExperienceComponent from "./pages/main/experience-component";

function App() {
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="h-screen w-full">
        <LandingComponent />
      </div>
      <div className="w-full">
        <ExperienceComponent />
      </div>
    </div>
  );
}

export default App;
