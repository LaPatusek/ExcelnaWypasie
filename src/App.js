import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cookies from './Components/Cookies/Cookies';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Kontakt from './Pages/Kontakt';
import Kursy from './Pages/Kursy';
import Main from './Pages/Main';

function App() {
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
