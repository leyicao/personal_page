import './App.scss';
import Sidebar from './layouts/Sidebar';
import ScrollButton from './layouts/ScrollButton';
import HomePageView from './Pages/Home';
import AboutMePageView from './Pages/AboutMe'

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
