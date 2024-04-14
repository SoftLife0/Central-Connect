import React from 'react'
import Container from '@mui/material/Container'; 
import Headings from './Headings';
import Header from './Header';


const Register = () => {
  return (
    <div>
      <Header />
      <Container style={{marginTop:'12vh'}}>
        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="central connect" mainTitle="Create your account" description="Tell us about yourself" />
        </div>

      </Container>
    </div>
  )
}

export default Register