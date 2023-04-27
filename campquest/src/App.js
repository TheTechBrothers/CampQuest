import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Event from "./pages/Event";
import Footer from "./fragements/Footer";
import Navbar from "./fragements/NavBar";
import {AuthProvider} from "./AuthContext";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";


function App() {
  return (
    <Router>
        <AuthProvider>
        <Navbar />
            <div className="container mt-3">
              <Routes>
                  <Route path="/Sign" element={<SignUp />} />
                  <Route path="/LoginIn" element={<Login/>} />
                <Route path="/Search"  element={<Search/>} />
                <Route path="/api/event" element={<Event/>} />
                <Route path="/Contact"  element={<Contact/>} />
                <Route path="/About Us" element={<AboutUs/>} />
              </Routes>
            </div>
        <Footer />
        </AuthProvider>
    </Router>
  );
}

export default App;
