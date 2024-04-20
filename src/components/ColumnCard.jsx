import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)({
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '15px',
  color: '#000',
  margin: 0,
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  justifyContent: 'space-between',
  textAlign: 'center',
});

const ColumnCard = ({ cardContent }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cardContent.map((card, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <h1 style={{fontWeight: 'bold' }}>{card.title}</h1>
              <h4>{card.count}</h4>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ColumnCard;
