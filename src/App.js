import './App.scss';
import Sidebar from './layouts/Sidebar';
import PageContainer from './layouts/PageContainer';
import HomePageView from './components/Home';
import AboutMePageView from './components/AboutMe'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <PageContainer>
        <HomePageView />
        <AboutMePageView />
      </PageContainer>
    </div>
  );
}

export default App;
