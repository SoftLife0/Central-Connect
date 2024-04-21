import React from 'react';
import { TextField, Grid, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = styled(TextField)({
  width: '100%',
});

const Search = () => {
  const handleSearch = (event) => {
    // Handle search functionality here
    console.log(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center" style={{marginBottom:'3vh'}}>
        <Grid item xs={12} sm={8} md={12}>
          <SearchInput
            label="Search"
            variant="outlined"
            onChange={handleSearch}
            placeholder="Search here"
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSearch} edge="end" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
