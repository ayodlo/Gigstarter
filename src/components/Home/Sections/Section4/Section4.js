import React from 'react';
import employee from '../../../../assets/employee.svg';
import businessman from '../../../../assets/businessman.svg';
import { useState } from 'react';
import './Section4.css';

const Section4 = () => {
    return (
        <div className='Section4'>
            <h1 className='Section4__header'>Sign up</h1>
            <p className='Section4__description'>
                Heard enough? Let's kickstart your career by enrolling in our
                Gigstarter economy!
            </p>
            <div className='Section4__ctas'>
                <div className='Section4__ctas__cta'>
                    <img  className='Section4__ctas__cta__emoji' src={businessman} alt='businessman' width='256px' />
                    <button className='Section4__ctas__cta__button Section4__ctas__cta__button--blue' href="forhire" variant="success">For Hire</button>
    { /*<button className='Section4__ctas__cta__button Section4__ctas__cta__button--blue' href="forhire" variant="success">I am looking for a Gig.</button>*/ }
                </div>
                <div  className='Section4__ctas__or'>OR</div>
                <div className='Section4__ctas__cta'>
                    <img className='Section4__ctas__cta__emoji' src={employee} alt="work" width="256px" />
                    <button className='Section4__ctas__cta__button Section4__ctas__cta__button--green' href="hiring" variant="primary">Hiring</button>
    { /*<button className='Section4__ctas__cta__button Section4__ctas__cta__button--green' href="hiring" variant="primary">I am looking for Talent.</button>*/ }
                </div>
            </div>
        </div>
    )
}

export default Section4;
