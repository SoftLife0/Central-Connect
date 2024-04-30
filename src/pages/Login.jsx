import React from 'react'
import Container from '@mui/material/Container'; 
import Headings from '../components/Headings';
import Header from '../components/Header';
import logo from '../assets/img/Central.png'
import { Grid, TextField } from '@mui/material';
import SubmitButton from '../components/Button';

const Login = () => {
  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh'}}>
        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="central connect" mainTitle="Login" description="Ener your credentials to access your alumni account" />
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img src={logo} alt="" width={400}/>
        </div>

        <div style={{marginTop:'5vh'}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                {/* <div className='form-control'>
                  <label htmlFor="email">Email</label>
                  <input type="email" className='answerCard' />

                </div> */}
                
                <TextField className='form-group' id="standard-textarea" placeholder='Please enter your Email Address' label="Email" variant='standard' fullWidth style={{marginBottom:'2vh'}}/>
                <TextField className='form-group' id="standard-textarea" placeholder='Please enter your Password' label="Password" variant='standard' fullWidth style={{marginBottom:'2vh'}}/>
              </div>
            </Grid>

          </Grid>
        </div>

        <div>
          <SubmitButton text="Connect Now" to="/year"/>

          <div style={{textAlign:'center'}}>
            <small ><a href="/register">Create an account now</a></small>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Login