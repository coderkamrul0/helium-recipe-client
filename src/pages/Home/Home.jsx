import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../../components/ChefCard/ChefCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import OurValue from '../../components/OurValue/OurValue';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <ChefCard/>
            <OurValue/>
            <Testimonial/>
        </div>
    );
};

export default Home;