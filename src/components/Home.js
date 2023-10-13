import React from "react";
import HeroImage from "./HeroImage";
import Techtune from '../../src/images/HeroImage.jpg';
import Carwash from '../../src/images/Carwash.jpg';
import Service from '../images/Service.jpg';
import Oil from '../images/oil.jpg';
import Suspension from '../images/Suspension.jpg';
import Tyre from '../images/Tyre.jpg';
import Battery from '../images/Battery.jpg';
import Thumb from "./Thumb";
import Grid from "./Grid";
import ServiceForm from "./Button";
const Text = "Welcome to techtune";
const images = [Carwash, Service, Oil, Suspension, Tyre, Battery];
const image_size = 'w780'
const Home = () => {
    return (
        <>
            <HeroImage image={Techtune}
                title='Techtune Motors'
                text={Text} />
            <Grid header="Services Offered">
                {images.map((image, index) => (
                    <Thumb key={index} image={image} />
                ))}
            </Grid>
            <ServiceForm />
        </>
    )
}
export default Home;