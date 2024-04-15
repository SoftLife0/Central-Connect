import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardItem = ({ title, count, url }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper className="dashboard-item" style={{ padding: '30px', marginBottom: '20px' }}>
      <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div data-aos="fade-up" data-aos-delay="100" className="card" style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{title}</h1>
          <h4 style={{ marginBottom: '0' }}>{count}</h4>
        </div>
      </Link>
    </Paper>
  </Grid>
);

export default DashboardItem;
