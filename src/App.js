import './App.css';
import About from './components/About';
import Home from './components/Home';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VirtualFitFurniture from './components/VirtualFitFurniture';
import VirtualWallFit from './components/VirtualWallFit';
import VirtualFitFurnitureMore from './components/VirtualFitFurnitureMore';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
    
      <Home />
      <VirtualFitFurniture/>
      <VirtualWallFit/>
      <About />
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Routes>
      <Route path='/virtualfit' element={<VirtualFitFurnitureMore/>}/>

      
    </Routes>
    </div>
  );
}

export default App;
