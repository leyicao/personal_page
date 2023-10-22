import './App.scss';
import Sidebar from './layouts/Sidebar';
import ScrollButton from './layouts/ScrollButton';
import HomePageView from './Sections/Home';
import AboutMePageView from './Sections/AboutMe'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div>
        <HomePageView />
        <AboutMePageView />
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
