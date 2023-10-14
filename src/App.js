import './App.scss';
import Sidebar from './layouts/Sidebar';
import PageContainer from './layouts/PageContainer';
import HomePageView from './components/Home';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <PageContainer>
        <HomePageView />
      </PageContainer>
    </div>
  );
}

export default App;
