import React from 'react';
import {Button} from '@mui/material';

const SubmitButton = ({ text }) => {
  return (
    <Button variant="contained" style={{textAlign:'center', width:'100%', margin:'2vh 0 ', background:'#dc3545', padding:'10px 22px'}}>
      <b>{text}</b>
    </Button>
  );
};

export default SubmitButton;