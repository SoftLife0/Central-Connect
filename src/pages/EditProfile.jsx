import React from 'react'
import Container from '@mui/material/Container'; 
import Headings from '../components/Headings';
import Header from '../components/Header';
import logo from '../assets/img/kweku.jpg'
import { Grid, TextField } from '@mui/material';
import SubmitButton from '../components/Button';



const EditProfile = () => {
  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh'}}>
        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="central alumni" mainTitle="Edit Your Profile" description="Tell us about yourself" />
        </div>


        <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%'}}>
          <img src={logo} alt="" width={300} style={{borderRadius:'10px'}}/>
        </div>
        

        <div style={{marginTop:'5vh'}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                <TextField className='form-group' id="standard-textarea" placeholder='Enter your Full Name' label="Name" variant='standard' fullWidth style={{marginBottom:'3vh'}}/>
                <TextField className='form-group' id="standard-textarea" placeholder='Enter Work Address' label="Work Address" variant='standard' fullWidth style={{marginBottom:'3vh'}}/>
                <TextField className='form-group' id="standard-textarea" placeholder='Enter Work Position' label="Work Position" variant='standard' fullWidth style={{marginBottom:'3vh'}}/>
              </div>
            </Grid>

          </Grid>
        </div>

        <div>
          <SubmitButton text="Edit Profile" to="/bio"/>

        </div>

      </Container>
    </>
  )
}

export default EditProfile