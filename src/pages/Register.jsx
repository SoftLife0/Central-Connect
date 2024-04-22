import React from 'react'
import Headings from '../components/Headings';
import Header from '../components/Header';
// import logo from '../assets/Central.png'
import { Container, Grid, TextField } from '@mui/material';
import SubmitButton from '../components/Button';

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
              <div>
                <TextField className='form-group' id="standard-textarea" type='name' placeholder='Please enter your Full Name' label="Full Name" multiline variant='standard' fullWidth style={{marginBottom:'3vh'}}/>
                <TextField className='form-group' id="standard-textarea" type='email' placeholder='Please enter your Email Address' label="Email" multiline variant='standard' fullWidth style={{marginBottom:'3vh'}}/>
                <TextField className='form-group' id="standard-textarea" type='text' placeholder='Please enter a Username' label="Username" multiline variant='standard' fullWidth style={{marginBottom:'3vh'}}/>
                <TextField className='form-group' id="standard-textarea" type='password' placeholder='Please enter a Strong Password' label="Password" multiline variant='standard' fullWidth style={{marginBottom:'3vh'}}/>
                <TextField className='form-group' id="standard-textarea" type='password' placeholder='Please enter a Strong Password' label="Confirm Password" multiline variant='standard' fullWidth style={{marginBottom:'3vh'}}/>

              </div>
            </Grid>

          </Grid>
        </div>

        <div>
          <SubmitButton text="Create Account"/>
          <div style={{textAlign:'center'}}>
            <small ><a href="/login">Already have an account ?</a></small>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Register