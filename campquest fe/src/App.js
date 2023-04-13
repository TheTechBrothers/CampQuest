import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Event from "./pages/Event";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Footer from "./fragements/Footer";
import Navbar from "./fragements/NavBar";


function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' exact element={<Signin />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/api/event' element={<Event/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
          <Route element={<NotFound/>} path="*" />
      </Routes>
        <Footer />
    </Router>
  )
}

export default App;
