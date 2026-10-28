import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import ContactStrip from "./components/ContactStrip/ContactStrip";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Treatments from "./pages/Treatments";
import Doctors from "./pages/Doctors";
import ContactUs from "./pages/ContactUs";

import "./App.css";

import MouseMovement from "./components/MouseMovement";
import "./components/Transitions.css";
import TransitionObserver from "./components/TransitionObserver";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";



function App() {
  return (
    <BrowserRouter>
    <MouseMovement />
    <TransitionObserver />
    <ScrollToTopButton />
    <WhatsAppButton />
      <Navbar />
      <AnnouncementBar />
      <ContactStrip />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
