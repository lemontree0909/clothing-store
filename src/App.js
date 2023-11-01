import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import Shop from "./Shop";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import AboutProduct from "./AboutProduct";
import './App.css';


function App() {
  return <Router>
    <nav>
      <Link to ="/" className="link">Shop</Link>
      <Link to = "/about" className="link">About</Link>
      <Link to = "/team" className="link">Team</Link>
      <Link to = "/contact" className="link">Contact us</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/team" element={<Team/>}/>
      <Route path="/contact" element={<Contact/>}/> 
      <Route path='/about/:title' element={<AboutProduct/>}/> 
    </Routes>
    </Router>
}

export default App;
