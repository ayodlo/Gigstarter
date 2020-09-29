import React from 'react';
import './SearchLocations.css';

const SearchLocations = () => {
    return (
        <div className='SearchLocations'>
            <h2 className='SearchLocations__header'>Locations</h2>
            <label className='SearchLocations__label'>city, state, or zip code</label>
            <input className='SearchLocations__input' />
        </div>
    )
}

export default SearchLocations;