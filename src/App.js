import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './components/Register';
import Headings from './components/Headings';
import Header from './components/Header';
import Login from './components/Login';
import Year from './components/Year';
import Search from './components/Search';


function App() {
  return (
    <Router>
      <div>
        {/* Define routes using Route component */}
        <Routes> {/* Use Routes to ensure only one route is rendered at a time */}
          <Route path="/login" element={<Login />} /> {/* Use 'element' prop instead of children */}
            <Route path="/register" element={<Register />} />
            <Route path="/headings" element={<Headings />} />
            <Route path="" element={<Header />} />
            <Route path="/year" element={<Year />} />
            <Route path="" element={<Search />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;