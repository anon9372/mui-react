import React from 'react';
import { useFormik } from 'formik';
import { Container, Button, Box, Typography } from '@material-ui/core';
import { useStyles } from '../styles/style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
const Form = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const auth = useAuth()
    const formik = useFormik({
        initialValues: {
            locationName: '',
            duration: '',
            ratings: '',
            price: '',
            reviews: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        },
    });

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Typography>
                    Welcome {auth.user}
                </Typography>
                <div>
                    <label htmlFor="locationName">Location Name</label>
                    <input
                        id="locationName"
                        name="locationName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.locationName}
                        className={classes.inputForm}
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        name="duration"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.duration}
                        className={classes.inputForm}
                    />
                </div>

                <div>
                    <label htmlFor="ratings">Ratings</label>
                    <input
                        id="ratings"
                        name="ratings"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.ratings}
                        className={classes.inputForm}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        className={classes.inputForm}
                    />
                </div>
                <div>
                    <label htmlFor="reviews">Reviews</label>
                    <input
                        id="reviews"
                        name="reviews"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.reviews}
                        className={classes.inputForm}
                    />
                </div>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Button variant="contained" color='primary' type='submit'>Submit</Button>
                    <Button variant="outlined" onClick={handleLogout}>Logout</Button>
                </Box>

            </form>
        </Container>
    );
};

export default Form