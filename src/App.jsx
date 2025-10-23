import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Batches from './pages/Batches';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Placement from './pages/Placement';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/batches" element={<Batches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/placement" element={<Placement />} />

          {/* Branch routes */}
          <Route path="/branches/delhi" element={<div className="p-8 text-white">Delhi Branch</div>} />
          <Route path="/branches/mumbai" element={<div className="p-8 text-white">Mumbai Branch</div>} />
          <Route path="/branches/bangalore" element={<div className="p-8 text-white">Bangalore Branch</div>} />
          <Route path="/branches/pune" element={<div className="p-8 text-white">Pune Branch</div>} />
          <Route path="/branches/hyderabad" element={<div className="p-8 text-white">Hyderabad Branch</div>} />

          {/* Search route */}
          <Route path="/search" element={<div className="p-8 text-white">Search Results</div>} />

          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl text-gray-400">Page Not Found</p>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;