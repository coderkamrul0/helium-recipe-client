import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../../components/ChefCard/ChefCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import ContactUs from '../../components/ContactUs/ContactUs';
import OurValue from '../../components/OurValue/OurValue';
import Newsletter from '../../components/NewsLetter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ChefCard/>
            <OurValue/>
            <Newsletter/>
            <Testimonial/>
        </div>
    );
};

export default Home;