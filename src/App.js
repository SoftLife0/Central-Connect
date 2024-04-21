import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import Year from './pages/Year';
import School from './pages/School';
import Department from './pages/Department';
import List from './pages/List';
import Bio from './pages/Bio';


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
            <Route path="/department" element={<Department />} />
            <Route path="/list" element={<List />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;