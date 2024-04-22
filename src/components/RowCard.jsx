import React from 'react';
import { styled, Card, CardContent, Box, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

const RowCard = ({ imageSrc, title, subTitle, linkTo }) => {

    const StyledLink = styled(Link)({
        color: 'inherit',
        textDecoration: 'none',
    })

  return (
    <>
        <StyledLink to={linkTo}>
        <Card sx={{ backgroundColor: '#fff', padding: '8px', borderRadius: '15px', color: '#000', margin: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Box sx={{ width: 60, height: 60, marginRight: 2 }}>
                <img src={imageSrc} alt="School" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </Box>
            
            <CardContent sx={{ flex: 1 }}>

                {/* <Typography variant="h6" component="h2" className='row-title'>
                {title}
                </Typography> */}
                <h3 className='row-title'>{title}</h3>
                <h5 className='row-description'>{subTitle}</h5>
    
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
