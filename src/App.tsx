import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer.tsx';
import Nav from './Components/Nav/Nav.tsx';
import About from './Pages/About.tsx';
import Kontakt from './Pages/Kontakt.tsx';
import Kursy from './Pages/Kursy.tsx';
import Main from './Pages/Main.tsx';
import Oferta from './Pages/Oferta.tsx';
import PageNotFound from './Pages/PageNotFound.tsx';
import Soon from './Pages/Soon.tsx';

declare var process: {
  env: {
    REACT_APP_TRACKING_ID: string;
  };
};

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);

const App: React.FC = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  ReactGA.send({
    hitType: 'pageview',
    page: window.location.hash,
    title: window.location.hash,
  });

  return (
    <Fragment>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/o-nas' element={<About />} />
          <Route path='/kursy' element={<Kursy />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/oferta' element={<Oferta />} />
          <Route path='/soon' element={<Soon />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default App;
