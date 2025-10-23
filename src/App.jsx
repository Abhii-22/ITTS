import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Batches from './pages/Batches';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Placement from './pages/Placement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Header />
        {/* Add padding-top to account for fixed header */}
        <main className="pt-20">
          <Routes>
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
            <Route path="*" element={<div className="p-8 text-center text-white">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
