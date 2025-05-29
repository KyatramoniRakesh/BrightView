import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
// import AllServices from './appComponents/AllServices/AllServices';
import About from './appComponents/AboutUs/About';
import Contactus from './appComponents/ContactUs/Contactus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<AllServices />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={< Contactus/>} />
      </Routes>
    </Router>
  );
}

export default App;
