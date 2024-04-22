import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';

const Profile = ({ name, imageSrc, bio, additionalInfo }) => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 2 }}>
      <h1 className='card-title'>{name}</h1>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar sx={{ width: 150, height: 150 }} alt={name} src={imageSrc} />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Typography variant="h6" gutterBottom style={{ textAlign: 'justify' }}>
          {bio}
        </Typography>
      </Box>
      
      {additionalInfo.map((info, index) => (
        <Box key={index} sx={{ textAlign: 'center', marginTop: 2 }}>
          <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'justify' }}>
            {info.label}
            <Typography variant="body1" style={{fontWeight:'bold'}}>
              {info.value}
            </Typography>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Profile;
