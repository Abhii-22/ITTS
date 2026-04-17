import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Placement from './pages/Placement';
import WebDevelopment from './coursespage/WebDevelopment';
import DataScience from './coursespage/DataScience';
import AIandML from './coursespage/AIandML';
import DevOps from './coursespage/DevOps';
import CloudComputing from './coursespage/CloudComputing';
import PythonFullstack from './coursespage/PythonFullstack';
import JavaFullstack from './coursespage/JavaFullstack';
import FrontendDeveloper from './coursespage/FrontendDeveloper';
import BackendDeveloper from './coursespage/BackendDeveloper';
import DataAnalytics from './coursespage/DataAnalytics';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/web-development" element={<WebDevelopment />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/courses/ai-ml" element={<AIandML />} />
          <Route path="/courses/devops" element={<DevOps />} />
          <Route path="/courses/cloud-computing" element={<CloudComputing />} />
          <Route path="/courses/python-fullstack" element={<PythonFullstack />} />
          <Route path="/courses/java-fullstack" element={<JavaFullstack />} />
          <Route path="/courses/frontend-developer" element={<FrontendDeveloper />} />
          <Route path="/courses/backend-developer" element={<BackendDeveloper />} />
          <Route path="/courses/data-analytics" element={<DataAnalytics />} />
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




