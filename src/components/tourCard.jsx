import React from 'react'
import { Paper, Grid, Typography, Box, Rating, createTheme, ThemeProvider } from '@mui/material';
import { AccessTime } from '@mui/icons-material'
import { useStyles } from "../styles/style";

const TourCard = ({ tour }) => {

    const classes = useStyles()

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src={tour.image} alt='image' className='img' />
                <Box paddingX={1}>
                    <Typography variant='subtitle1' component={'h2'}>
                        {tour.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant='body2' component={'p'} className={classes.body2}>
                            {tour.duration} hours
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }} marginTop='15px'>
                        <Rating name='read-only' value={tour.rating} precision={0.5} size={'small'} readOnly />
                        <Typography variant='body2' className={classes.body2} component={'p'} marginLeft='2px'>
                            {tour.rating}
                        </Typography>
                        <Typography variant='body3' component={'p'} marginLeft='2px' className={classes.body3}>
                            ({tour.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' component={'h3'} marginTop='2px'>
                            From ${tour.price} Only
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}

export default TourCard
