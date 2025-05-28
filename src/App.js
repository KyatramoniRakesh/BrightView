import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AllServices from './appComponents/AllServices/AllServices';
import About from './appComponents/AboutUs/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
