import React from 'react';
import './Section2.css'

const SectionTwo = () => {
    return (
        <div className='Section2'>
            <div className='Section2__economy'>
                <h1 className='Section2__economy__header'>Be Part of the Gig Economy</h1>
                <div className='Section2__economy__list'>
                    <div className='Section2__economy__list__item Section2__economy__list--blue'>
                        Work at your own pace 🚲
                    </div>
                    <div className='Section2__economy__list__item Section2__economy__list--purple'>
                        Gain real-world experience 🌏
                    </div>
                    <div className='Section2__economy__list__item Section2__economy__list--green'>
                        Make additional income 💰
                    </div>
                </div>
            </div>
            <div className='Section2__video'>
            <iframe
                className='Section2__video__iframe'
                title="gigeconomy"
                src="https://www.youtube.com/embed/LgdjjxWaAlk"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            />
            </div>
        </div>
    )
}

export default SectionTwo;