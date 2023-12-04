import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VirtualFitFurnitureMore from "./components/VirtualFitFurnitureMore";
import VirtualFitWallMore from "./components/VirtualFitWallMore";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/furniture" element={<VirtualFitFurnitureMore />} />
        <Route path="/walldecoration" element={<VirtualFitWallMore />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/virtualfitfurnituremore"
          element={<VirtualFitFurnitureMore />}
        />
        <Route path="/virtualwallfitmore" element={<VirtualFitWallMore />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="userprofile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
