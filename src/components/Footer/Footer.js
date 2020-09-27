import React from 'react';
import fb from '../../assets/social/facebook.svg';
import twit from '../../assets/social/twitter.svg';
import insta from '../../assets/social/instagram.svg';
import linkedin from '../../assets/social/linkedin.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer__social'>
                <div className='Footer__social__icon'>
                    <img src={fb} alt="social" width="64px" />
                </div>
                <div className='Footer__social__icon'>
                    <img src={twit} alt="social" width="64px" />
                </div>
                <div className='Footer__social__icon'>
                    <img src={insta} alt="social" width="64px" />
                </div>
                <div className='Footer__social__icon'>
                    <img src={linkedin} alt="social" width="64px" />
                </div>
            </div>
            <div className='Footer__termsAndPolicy'>
                    <p className='Footer__termsAndPolicy__line'>© 2018 Gigstarter Inc.</p> 
                    <p><a href="https://docs.google.com/document/d/1wV2m-C5OYNqIvnf6fk-gLQOlFYPT5JrrICvxixWRnzg/edit?usp=sharing">Terms </a> & <a href="https://docs.google.com/document/d/1xAFWFhOvvpbSW7lG7RTIrxwBH38kgVALVyco0Xx2kBg/edit?usp=sharing">Private Policy</a></p>
            </div>
        </div>
    )
}

export default Footer;