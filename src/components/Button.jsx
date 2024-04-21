import React from 'react';
import {Button} from '@mui/material';

const SubmitButton = ({ text, onClick }) => {
  return (
    <Button variant="contained"  onClick={onClick} style={{textAlign:'center', width:'100%', margin:'2vh 0 ', background:'#dc3545', padding:'10px 22px'}}>
      <b>{text}</b>
    </Button>
  );
};

export default SubmitButton;