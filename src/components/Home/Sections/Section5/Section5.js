import React from 'react';

const Section5 = () => {
    return (
        <div className='section5'>
            <h1>Sign up</h1>
            <p>
                Heard enough? Let's kickstart your career by enrolling in our
                Gigstarter economy!
            </p>
            <div className='SignCont'>
                <div className='Sign1'>
                    <img src={businessman} alt="businessman" width="256px" />
                    <button
                        className='SignBut1'
                        href="forhire"
                        variant="success"
                    >
                        I am looking for a Gig.
                    </button>
                    <button
                        className='SignBut1m'
                        href="forhire"
                        variant="success"
                    >
                        For Hire
                    </button>
                </div>
                <div className='SignMiddle'>OR</div>
                <div className='Sign2'>
                    <img src={employee} alt="work" width="256px" />
                    <button className='SignBut2' href="hiring" variant="primary">
                        I am looking for Talent.
                    </button>
                    <button
                        className='SignBut2m'
                        href="hiring"
                        variant="primary"
                    >
                        Hiring
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section5;
