import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const SubmitButton = ({ text, onClick, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button variant="contained" onClick={onClick} style={{ textAlign: 'center', width: '100%', margin: '2vh 0', background: '#dc3545', padding: '10px 22px' }}>
        <b>{text}</b>
      </Button>
    </Link>
  );
};

export default SubmitButton;