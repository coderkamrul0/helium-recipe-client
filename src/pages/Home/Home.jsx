import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../../components/ChefCard/ChefCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ChefCard/>
            <Testimonial/>
            <ContactUs/>
        </div>
    );
};

export default Home;