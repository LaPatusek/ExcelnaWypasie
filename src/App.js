import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cookies from './Components/Cookies/Cookies';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Kontakt from './Pages/Kontakt';
import Kursy from './Pages/Kursy';
import Main from './Pages/Main';
import Oferta from './Pages/Oferta';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);

function App() {
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
          <Route path='*' element={<Main />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
      <Cookies />
    </Fragment>
  );
}

export default App;
