import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../../components/ChefCard/ChefCard';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ChefCard/>
            <Testimonial/>
        </div>
    );
};

export default Home;