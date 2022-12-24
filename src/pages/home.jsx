import TourCard from "../components/tourCard";
import { Grid, Container, Typography } from "@mui/material";
import cities from '../data/data.json'

function Home() {
    return (
        <>
            <Container sx={{ marginTop: 5 }}>
                {
                    cities.map((city, index) => (
                        <div key={index}>
                            <Typography variant="h4" component='h2' marginTop={5} marginBottom={3} >
                                Top {city.name} tours
                            </Typography>
                            <Grid container spacing={5}>
                                {
                                    city.tours.map((tour) => (
                                        <TourCard key={tour.id} tour={tour} />
                                    ))
                                }
                            </Grid>
                        </div>
                    ))
                }

            </Container>
        </>
    );
}

export default Home;
