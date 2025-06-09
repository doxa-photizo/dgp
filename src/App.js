import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
/*import About from './Component/About';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
         {/* <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />*/}
        </Routes>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;
