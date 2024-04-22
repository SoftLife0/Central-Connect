import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)({
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '15px',
  color: '#000',
  margin: 0,
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  justifyContent: 'space-between',
  textAlign: 'center',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#dc3545',
    color: '#fff',
    '& .card-description': {
      color: '#fff',
    },
  },
});

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
})

const ColumnCard = ({ cardContent }) => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:'3vh'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cardContent.map((card, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <StyledLink to='/school'>
              <Item>
                <h1 className='card-title'>{card.title}</h1>
                <h5 className='card-description'>{card.count}</h5>
              </Item>
            </StyledLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ColumnCard;
