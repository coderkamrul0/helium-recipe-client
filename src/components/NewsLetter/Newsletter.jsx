import React from 'react';
import './NewsLetter.css'
import { Container } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";


const Newsletter = () => {
    return (
        <div style={{backgroundColor: '#F7F7F7',padding: '50px 0px'}}>
            <Container className='newsletter'>
            <h1 className='subscribe-title'>Subscribe Us</h1>
            <div className='news-flex'>
                <div className='news-text'>
                    <h5 className='looking'>Looking for mor recipes?</h5>
                    <p>Get our latest recipes and expert tips right in your inbod</p>
                    <div className='subscribed'>
                        <input className='subscribe-input' type="text" placeholder='Enter your email' />
                        <a className='subscribe-btn' href="#">Subscribe <FaLongArrowAltRight/></a>
                    </div>
                </div>
                
            </div>
            </Container>
        </div>
    );
};

export default Newsletter;