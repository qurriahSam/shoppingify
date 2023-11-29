import './App.css';
import { Routes, Route } from 'react-router-dom';

import SiteWrapper from './components/Layout';
import Home from './components/home';
import History from './components/history';
import Stats from './components/stats';
import HistShopList from './components/history/histShopList';

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
