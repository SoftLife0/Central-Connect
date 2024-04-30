import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const SubmitButton = ({ text, onClick, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button className='pill-button' variant="contained" onClick={onClick} style={{ padding:'13px', fontWeight:'bold', textAlign:'center', width:'100%', margin:'4vh 0', background:'#dc3545' }}>
        <b>{text}</b>
      </Button>
    </Link>
  );
};

export default SubmitButton;