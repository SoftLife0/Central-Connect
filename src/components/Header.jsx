import React from 'react';

const Header = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0', backgroundColor: '#dc3545' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '13px 16px', display: 'flex', justifyContent: 'space-between'  }}>
        <a className="navbar-brand" href="/" style={{ color: '#fff', fontWeight:'700', fontSize: '22px', textDecoration: 'none', paddingTop:'10px' }}>connect.central.edu.gh</a>
        <button className="pill-button">Dashboard</button>
      </nav>
    </div>
  );
};

export default Header;