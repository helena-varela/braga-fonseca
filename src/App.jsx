import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import CristinaPage from './pages/cristinapage.jsx';
import KellyPage from './pages/kellypage.jsx';
import JosePage from './pages/jose.jsx';
import ScrollToTop from './components/scrolltotop.jsx';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cristina-braga" element={<CristinaPage />} />
        <Route path="/kelly-fonseca" element={<KellyPage />} />
        <Route path="/jose-anderson" element={<JosePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}