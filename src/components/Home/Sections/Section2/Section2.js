import React from 'react';

const SectionTwo = () => {
    return (
        <div className='section2'>
            <div className='section2_row1'>
                <div className='section2_col1'>
                    <h1>Be Part of the Gig Economy</h1>
                    <div className='section2_list1'>
                        <div variant="primary">
                            Work at your own pace 🚴‍
      </div>
                        <div variant="secondary">
                            Gain real-world experience 🌎
      </div>
                        <div variant="success">
                            Make additional income 💰
      </div>
                    </div>
                </div>
                <div className='VideoCont'>
                    <iframe
                        className='Video'
                        title="gigeconomy"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/LgdjjxWaAlk"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;