import React from "react";
import NavBar from "./fragements";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Event from "./pages/Event";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Signin />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/Event' element={<Event/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
          <Route element={<NotFound/>} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
