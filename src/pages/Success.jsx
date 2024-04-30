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
          <div style={{ borderRadius: '200px', height: '200px', width: '300px', background: '#F8FAF5', margin: '0 auto' }}>
            <img src={logo} alt="" />
          </div>
          <div  className='success'>
            <h1>Success</h1> 
            <p>Your form was submitted successfully. Your data has also been recorded for future communication. We are proud of you.</p>
          </div>
        </div>
          
        </Container>
    </>
  )
}

export default Success;