import { Nav, ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
