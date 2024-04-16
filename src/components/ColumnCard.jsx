import * as React from 'react';
import { styled, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ColumnCard = ({ url, title, count }) => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={6} className='dashboard-item' style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', color: '#000', margin: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginBottom: '5vh', justifyContent: 'space-between' }}>
          <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div data-aos="fade-up" data-aos-delay="100" className="card" style={{ textAlign: 'center' }}>
              <h1 style={{fontWeight: 'bold' }}>{title}</h1>
              <h4>{count}</h4>
            </div>
          </Link>
        </Grid>

        <Grid item xs={6} md={6} className='dashboard-item' style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', color: '#000', margin: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginBottom: '5vh', justifyContent: 'space-between' }}>
          <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div data-aos="fade-up" data-aos-delay="100" className="card" style={{ textAlign: 'center' }}>
              <h1 style={{fontWeight: 'bold' }}>{title}</h1>
              <h4>{count}</h4>
            </div>
          </Link>
        </Grid>


      </Grid>
    </>
  );
}

export default ColumnCard;
