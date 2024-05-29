import React, { useState } from 'react';
import Headings from '../components/Headings';
import Header from '../components/Header';
import { Container, Grid, TextField } from '@mui/material';
import SubmitButton from '../components/Button';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://172.16.12.118:5000/api/v1/create_new_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        // You can redirect the user or show a success message here
      } else {
        console.error('Registration failed:', data.message);
        // Handle registration error, e.g., display error message to the user
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle network error or other unexpected errors
    }
  };

  return (
    <>
      <Header />
      <Container style={{ marginTop: '12vh' }}>
        <div>
          <Headings subTitle="central connect" mainTitle="Create your account" description="Tell us about yourself" />
        </div>

        <div style={{ marginTop: '5vh' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  id="fullName"
                  type='text'
                  placeholder='Please enter your Full Name'
                  label="Full Name"
                  variant='standard'
                  fullWidth
                  style={{ marginBottom: '3vh' }}
                />
                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  type='email'
                  placeholder='Please enter your Email Address'
                  label="Email"
                  variant='standard'
                  fullWidth
                  style={{ marginBottom: '3vh' }}
                />
                <TextField
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  type='password'
                  placeholder='Please enter a Strong Password'
                  label="Password"
                  variant='standard'
                  fullWidth
                  style={{ marginBottom: '3vh' }}
                />
                <TextField
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  id="confirmPassword"
                  type='password'
                  placeholder='Please enter a Strong Password'
                  label="Confirm Password"
                  variant='standard'
                  fullWidth
                  style={{ marginBottom: '3vh' }}
                />
                <SubmitButton type="submit" text="Connect Now" />
              </form>
              <div style={{ textAlign: 'center' }}>
                <small><a href="/">Already have an account ?</a></small>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Register;
