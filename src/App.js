import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './components/Register';
import Headings from './components/Headings';
import Header from './components/Header';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div>
        {/* Define routes using Route component */}
        <Routes> {/* Use Routes to ensure only one route is rendered at a time */}
          <Route path="/login" element={<Login />} /> {/* Use 'element' prop instead of children */}
            <Route path="/register" element={<Register />} />
            <Route path="/headings" element={<Headings />} />
            <Route path="/header" element={<Header />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;