import './App.css';
import { Routes, Route } from 'react-router-dom';

import SiteWrapper from './components/Layout';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Stats from './pages/Stats/Stats';
import HistShopList from './components/ui/History/HistShopList';
import PageNotFound from './pages/pageNotFound/PageNotFound';

function App() {
  return (
    <SiteWrapper>
      <Routes>
        <Route index path='/' Component={Home} />
        <Route path='history' Component={History} />
        <Route path='history/:id' Component={HistShopList} />
        <Route path='statistics' Component={Stats} />
        <Route path='*' Component={PageNotFound} />
      </Routes>
      {/*       <footer className='text-center mt-12 text-xs'>
        &copy;
        <a href='https://github.com/qurriahSam' className='text-blue-600'>
          Sam_Kuria{' '}
        </a>
        2024
      </footer> */}
    </SiteWrapper>
  );
}

export default App;
