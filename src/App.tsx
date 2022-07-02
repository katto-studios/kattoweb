import { Nav, ThemeProvider } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
