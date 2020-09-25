//Assets
import searchicon from '../../../../assets/search.svg'
import envelope from '../../../../assets/envelope.svg'
import growth from '../../../../assets/growth.svg'

//CSS
import './Section1.css'

//Dependencies
import React from 'react';

const Section1 = () => {
    return (
        <div className='Section1'>
            <div className='Section1__career'>
                <h1 className='Section1__career__heading'>Student Career Building Platform</h1>
                <p className='Section1__career__description'>
                    Gigstarter is aimed to provide professional experiences within the field that college students are studying. Our team has an extensive student-interview record and 87% have claimed they feel unprepared for the workforce due to their lack of practical experience outside of the classroom.
                </p>
            </div>
            <div className='Section1__steps'>
                <div className='Section1__steps__step'>
                    <img src={searchicon} alt="search" width="64px" />
                    <h3>Step 1</h3>
                    <p>
                        Scroll through hundreds of gig opportunities offered on Gigstarter.
                    </p>
                </div>
                <div className='Section1__steps__step'>
                    <img src={envelope} alt="envelope" width="64px" />
                    <h3>Step 2</h3>
                    <p>
                        If you show interest in a gig, contact the employer to discover the details of the job.
                    </p>
                </div>
                <div className='Section1__steps__step'>
                    <img src={growth} alt="money" width="64px" />
                    <h3>Step 3</h3>
                    <p>
                        Once the gig is complete, get paid for the work you have done!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section1;