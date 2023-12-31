import './App.css';
import { Routes, Route } from 'react-router-dom';

import SiteWrapper from './components/Layout';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Stats from './pages/Stats/Stats';
import HistShopList from './components/ui/History/HistShopList';

function App() {
  return (
    <SiteWrapper>
      <Routes>
        <Route index path='/' Component={Home} />
        <Route path='history' Component={History} />
        <Route path='history/hst' Component={HistShopList} />
        <Route path='statistics' Component={Stats} />
      </Routes>
    </SiteWrapper>
  );
}

export default App;
