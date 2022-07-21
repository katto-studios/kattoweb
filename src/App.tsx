import { Nav, ThemeProvider } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages';
import Footer from '../components/Footer';
import Gallery from '../pages/Gallery';
import Article from '../pages/Article';

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/article/:articleId" element={<Article />} />
          <Route
            path="*"
            element={
              <h1 style={{ marginTop: '30vh', textAlign: 'center' }}>
                Page Not Found
              </h1>
            }></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
