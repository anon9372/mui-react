import { Container, Typography, Box, Paper, BottomNavigation } from '@material-ui/core'
import React from 'react'
import { useStyles } from "../styles/style";
import ImageCollage from '../components/imageCollage';
import ControlledAccordions from '../components/accordian';
import BasicModal from '../components/modal'
const Tour = () => {
    const classes = useStyles()
    return (
        <>
            <Container sx={{ width: 900 }}>
                <Typography variant="h4" component='h2' className={classes.tourHeading}>
                    Explore the world in Las Vagas!
                </Typography>
                <Box marginTop={3} marginBottom={10} className={classes.imageContainer}>
                    <img src='https://media.istockphoto.com/id/954500850/photo/las-vegas.jpg?b=1&s=170667a&w=0&k=20&c=5NLBTRESPyyyujydMuH64L4uPwpjACpp_NIgQdJp_eg=' alt='main' height={425} />
                    <ImageCollage />
                </Box>
                <Typography variant='h6' component={'h4'} className={classes.tourFooter}>
                    About this website
                </Typography>
                <Typography variant='subtitle1' component={'p'} className={classes.tourFooter}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, odit quod non maiores delectus maxime, illo ratione quae, tempore suscipit expedita voluptatem voluptas animi cumque praesentium illum impedit excepturi dolorem.
                </Typography>
                <Box marginBottom={10}>
                    <Typography variant='h6' component='h4' className={classes.tourFooter}>
                        Frequently asked questions.
                    </Typography>
                    <ControlledAccordions />
                </Box>
                <Paper elevation={3} className={classes.footer}>
                    <BottomNavigation>
                        <BasicModal />
                    </BottomNavigation>
                </Paper>
            </Container>

        </>
    )
}

export default Tour
