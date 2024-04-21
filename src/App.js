import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import Year from './pages/Year';
import School from './pages/School';


function App() {
  return (
    <Router>
      <div>
        {/* Define routes using Route component */}
        <Routes> {/* Use Routes to ensure only one route is rendered at a time */}
          <Route path="/login" element={<Login />} /> {/* Use 'element' prop instead of children */}
            <Route path="/register" element={<Register />} />
            <Route path="/year" element={<Year />} />
            <Route path="/school" element={<School />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;