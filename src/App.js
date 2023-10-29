import "./App.scss";
import Sidebar from "./Layouts/Sidebar";
import ScrollButton from "./Layouts/ScrollButton";
import HomeView from "./Sections/Home";
import AboutMeView from "./Sections/AboutMe";
import SkillsView from "./Sections/Skills";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div>
        <HomeView />
        <AboutMeView />
        <SkillsView />
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
