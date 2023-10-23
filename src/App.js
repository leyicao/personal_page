import './App.scss';
import Sidebar from './layouts/Sidebar';
import ScrollButton from './layouts/ScrollButton';
import HomeView from './Sections/Home';
import AboutMeView from './Sections/AboutMe';
import SkillsView from './Sections/Skills';


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
