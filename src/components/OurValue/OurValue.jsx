import React from 'react';
import { Container } from 'react-bootstrap';
import { FaRegGem,FaHeart,FaSuperpowers,FaShieldAlt,FaStar } from "react-icons/fa";
import './OurValue.css'


const OurValue = () => {
    return (
        <div>
            <Container>
                <div className='main-value'>
                    <div>
                        <img src="https://i.ibb.co/jL0wrqS/pngwing-com-3.png" alt="" />
                    </div>
                    <div>
                        <div className='second-title'>
                            <div className='value-flex'>
                                <h4 className='value-icon'><FaRegGem/></h4>
                                <h4>Our Value To Help You</h4>
                            </div>
                            <p>we always want to provide the best value for you and your health, join us to maximize benefits</p>
                        </div>
                        
                        <div className='four-value'>
                        <div className='value-item'>
                            <h4 className='value-icon'><FaSuperpowers/></h4>
                            <h5>Increase Energy</h5>
                            <p>Have enough energy can help carry out a routine</p>
                        </div>
                        <div className='value-item'>
                            <h4 className='value-icon'><FaShieldAlt/></h4>
                            <h5>Controlling Weight</h5>
                            <p>Body will feel lighter and will not be easily tired</p>
                        </div>
                        <div className='value-item'>
                            <h4 className='value-icon'><FaStar/></h4>
                            <h5>Become Happier</h5>
                            <p>Living a healthy life also increase self-confidence</p>
                        </div>
                        <div className='value-item'>
                            <h4 className='value-icon'><FaHeart/></h4>
                            <h5>Become Healthier</h5>
                            <p>immune will stronger if the body is healthier</p>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurValue;