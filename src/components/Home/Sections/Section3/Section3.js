import React from 'react';
import bag from '../../../../assets/money-bag.svg';
import shop from '../../../../assets/shop.svg';
import presentation from '../../../../assets/presentation.svg';
import './Section3.css';

const Section3 = () => {
    return (
        <div className='Section3'>
            <div className='Section3__steps'>
                <div className='Section3__steps__step'>
                    <img src={bag} alt="bag" width="64px" />
                    <p>Provide students with experience & cash</p>
                </div>
                <div className='Section3__steps__step'>
                    <img src={shop} alt="shop" width="64px" />
                    <p>Provides business owners a helping hand</p>
                </div>
                <div className='Section3__steps__step'>
                    <img src={presentation} alt="business" width="64px" />
                    <p>Increases the economic development of Los Angeles</p>
                </div>
            </div>
            <div className='Section3__bigPicture'>
                <h1 className='Section3__bigPicture__heading'>The Big Picture</h1>
                <p className='Section3__bigPicture__description'>
                    Providing students with practical experience would not be possible
                    without the large scope of work provided by business owners across
                    Los Angeles. Every transaction on Gigstarter does all of 3 things
                </p>
            </div>
        </div>
    )
}

export default Section3;