import React from 'react'
import { Container } from '@mui/material';
import Header from '../components/Header';

const Success = ({message}) => {
  return (
    <>
        <Header />
        <Container style={{marginTop:'20vh'}}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
            <i className="checkmark">✅</i>
          </div>
          <p>{message}</p>
        </div>
          
        </Container>
    </>
  )
}

export default Success;