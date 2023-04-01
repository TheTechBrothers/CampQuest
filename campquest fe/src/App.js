import React from "react";
import NavBar from "./fragements";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import login from "./pages/Login";
import Event from "./pages/Event";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' exact element={<Signin />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/Event' element={<Event/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
