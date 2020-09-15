import React from 'react';

const Footer = () => {
    return (
        <div className='Sec7' id="Sec7">
            <div className='Sec7Cont'>
                <div className='FooterTop'>
                    <div className='SocRow'>
                        <div className='SocCont'>
                            <img src={fb} alt="social" width="64px" />
                            <p>Gigstarter</p>
                        </div>
                        <div className='SocCont'>
                            <img src={twit} alt="social" width="64px" />
                            <p>#Gigstarter</p>
                        </div>
                        <div className='SocCont'>
                            <img src={insta} alt="social" width="64px" />
                            <p>@Gigstarter</p>
                        </div>
                        <div className='SocCont'>
                            <img src={linkedin} alt="social" width="64px" />
                            <p>Gigstarter</p>
                        </div>
                    </div>
                    <div className='FooterAbout' style={{ textAlign: 'right' }}>
                        <h1>ABOUT US</h1>
                        <br />
                        <p>
                            Welcome to Gigstarter, your number one source for the best gigs.
                            We're dedicated to giving you the very best gigs, with a focus
                            on dependability, availability, and uniqueness. We hope you
                            enjoy our products as much as we enjoy offering them to you. If
                            you have any questions or comments, please don't hesitate to
                            contact us.
                            Sincerely,
            <br />
            Gigstarter
          </p>
                    </div>
                </div>
                <div className='FooterBottom'>
                    <div>
                        © 2018 Gigstarter Inc. By using this site, you agree to our
          <a href="https://docs.google.com/document/d/1wV2m-C5OYNqIvnf6fk-gLQOlFYPT5JrrICvxixWRnzg/edit?usp=sharing">
                            terms
          </a>
          &
          <a href="https://docs.google.com/document/d/1xAFWFhOvvpbSW7lG7RTIrxwBH38kgVALVyco0Xx2kBg/edit?usp=sharing">
                            private policy.
          </a>
                    </div>
                    <div
                        className='FooterStuff'
                        style={{ textAlign: 'right' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;