import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Slider, Box, TextField, Button} from '@mui/material';
import axios from 'axios';


const FilterOptions = ({handleFilterChange, ratingValue, setRatingValue, yearValue, setYearValue,}) => {
   

    const baseURL = "http://localhost:3080";

    const handleRatingChange = (event, newValue) => {
        setRatingValue(newValue);
    
    };

    const handleYearChange = (event, newValue) => {
        setYearValue(newValue);
    };

    const handleYearChangeCommitted = () => {
        handleFilterChange(yearValue, ratingValue);
    };




    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{marginRight: '1rem'}} data-testid='filters-title'>
                    Filter Options
                </Typography>
                <Box sx={{width: 300}}>
                    <Toolbar>
                        <TextField
                            variant="outlined"
                            label="Search query"
                            size="small"
                            style={{backgroundColor: 'white', borderRadius: '4px', marginRight: '1rem'}}
                            data-testid='filters-search-textField'
                            onChange={(event) => {
                                 // add code here
                                 console.log(event.target.value)
                                 
                            }}
                        />
                        <Button variant="contained" color="primary" data-testid='filters-searchBtn' onClick={() => {
                            // add code here
                        }}>
                            Search
                        </Button>
                    </Toolbar>
                </Box>
                <Box sx={{width: 150, marginRight: '4rem'}}>
                    <Typography gutterBottom variant="h6" data-testid='filters-rating-title'>Rating</Typography>
                    <Slider
                        value={ratingValue}
                        onChange={handleRatingChange}
                        onChangeCommitted={() => {
                            
                        }}
                        valueLabelDisplay="auto"
                        min={0}
                        max={5}
                        step={1}
                        color="secondary"
                        marks
                        data-testid='filters-rating-slider'
                    />
                </Box>
                <Box sx={{width: 150, marginRight: '4rem'}}>
                    <Typography gutterBottom variant="h6" data-testid='filters-publicationYear-title'>Publication Year</Typography>
                    <Slider
                        value={yearValue}
                        onChange={handleYearChange}
                        onChangeCommitted={handleYearChangeCommitted}
                        valueLabelDisplay="auto"
                        min={1900}
                        max={2023}
                        step={1}
                        color="secondary"
                        data-testid='filters-publicationYear-slider'
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default FilterOptions;
