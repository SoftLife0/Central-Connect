import React from 'react'
import Container from '@mui/material/Container'; 
import Headings from './Headings';
import Header from './Header';
// import logo from '../assets/Central.png'
import { Grid, TextField } from '@mui/material';
import SubmitButton from './Button';

function Login() {
  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh'}}>
        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="central connect" mainTitle="Login" description="Ener your credentials to access your alumni account" />
        </div>

        {/* <img src={logo} alt="" width={200}/> */}

        <div style={{marginTop:'5vh'}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className='form-group'>
                <TextField helperText="Please enter your Email Address" type='email' label="Email" fullWidth style={{marginBottom:'10px'}}/>
                <TextField helperText="Please enter your Password" type='password' label="Password" fullWidth style={{marginBottom:'10px'}}/>

              </div>
            </Grid>

          </Grid>
        </div>

        <div>
          <SubmitButton text="Connect Now"/>
          <div style={{textAlign:'center'}}>
            <small ><a href="/register">Create an account now</a></small>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Login