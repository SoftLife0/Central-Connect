import React from 'react'
import Headings from './Headings';
import Header from './Header';
// import logo from '../assets/Central.png'
import { Container, Grid, TextField } from '@mui/material';
import SubmitButton from './Button';

const Register = () => {
  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh'}}>
        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="central connect" mainTitle="Create your account" description="Tell us about yourself" />
        </div>

        {/* <img src={logo} alt="" width={200}/> */}

        <div style={{marginTop:'5vh'}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className='form-group'>
                <TextField helperText="Please enter your Name" type='name' label="Name" fullWidth style={{marginBottom:'10px'}}/>
                <TextField helperText="Please enter your Email Address" type='email' label="Email" fullWidth style={{marginBottom:'10px'}}/>
                <TextField helperText="Please enter your Index Number" type='text' label="Index Number" fullWidth style={{marginBottom:'10px'}}/>
                <TextField helperText="Please enter your Password" type='password' label="Password" fullWidth style={{marginBottom:'10px'}}/>
                <TextField helperText="Please Confirm Password" type='password' label="Confirm Password" fullWidth style={{marginBottom:'10px'}}/>

              </div>
            </Grid>

          </Grid>
        </div>

        <div>
          <SubmitButton text="Connect Now"/>
          <div style={{textAlign:'center'}}>
            <small ><a href="/login">Already have an account ?</a></small>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Register