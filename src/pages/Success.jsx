import React from 'react'
import { Container } from '@mui/material';
import Header from '../components/Header';
import logo from '../assets/img/success.jpeg'

const Success = ({ message }) => {
  return (
    <>
        <Header />
        <Container style={{marginTop:'20vh'}}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
            <img src={logo} alt="" /><p>{message}</p>
          </div>
        </div>
          
        </Container>
    </>
  )
}

export default Success;