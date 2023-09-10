import { Fragment } from 'react';
import Cookies from './Components/Cookies/Cookies';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <Fragment>
      <header>
        <Nav />
      </header>

      <main></main>

      <footer>
        <Footer />
      </footer>
      <Cookies />
    </Fragment>
  );
}

export default App;
