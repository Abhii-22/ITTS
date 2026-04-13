import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Batches from "../pages/Batches";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Placement from "../pages/Placement";
import WebDevelopment from "../coursespage/WebDevelopment";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/batches" element={<Batches />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/web-development" element={<WebDevelopment />} />
                <Route path="/placement" element={<Placement />} />
            </Routes>
        </Router>
    );
}
export default AppRoutes;
