import './App.css';
import About from './components/About';
import Home from './components/Home';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VirtualFitFurniture from './components/VirtualFitFurniture';
import VirtualWallFit from './components/VirtualWallFit';
import VirtualFitFurnitureMore from './components/VirtualFitFurnitureMore';
import VirtualFitWallMore from './components/VirtualFitWallMore';
import { Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/furniture" element={<VirtualFitFurniture/>} />
        <Route path="/walldecoration" element={<VirtualWallFit/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/virtualfitfurnituremore" element={<VirtualFitFurnitureMore/>} />
        <Route path='/virtualwallfitmore' element={<VirtualFitWallMore/>}/>
        <Route path='/pricing' element={<Pricing/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
