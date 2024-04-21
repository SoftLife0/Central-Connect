import React from 'react';
import { styled, Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

const RowCard = ({ imageSrc, schoolName, number }) => {

    const StyledLink = styled(Link)({
        color: 'inherit',
        textDecoration: 'none',
    })

  return (
    <>
        <StyledLink to='/login'>
        <Card sx={{ backgroundColor: '#fff', padding: '10px', borderRadius: '15px', color: '#000', margin: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Box sx={{ width: 60, height: 60, marginRight: 2 }}>
                <img src={imageSrc} alt="School" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </Box>
            
            <CardContent sx={{ flex: 1 }}>

                <Typography variant="h6" component="h2" style={{fontWeight: 'bold' }}>
                {schoolName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {number} graduates
                </Typography>
            </CardContent>
            
            <IconButton>
                <SchoolIcon />
            </IconButton>
        </Card>
        </StyledLink>
    </>
  );
};

export default RowCard;
