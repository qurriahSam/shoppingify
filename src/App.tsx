import './App.css';
import { Routes, Route } from 'react-router-dom';

import SiteWrapper from './components/Layout';
import Home from './components/home';
import History from './components/history';
import Stats from './components/stats';

function App() {
  return (
    <SiteWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='history' element={<History />} />
        <Route path='statistics' element={<Stats />} />
      </Routes>
    </SiteWrapper>
  );
}

export default App;
