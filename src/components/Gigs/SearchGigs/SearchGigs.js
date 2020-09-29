import React from 'react';
import './SearchGigs.css'

const SearchGigs = () => {
    return (
        <div className='SearchGigs'>
            <h2 className='SearchGigs__header'>Search Gigs</h2>
            <label className='SearchGigs__label'>gig name, keywords, or company name</label>
            <input className='SearchGigs__input' />
        </div>
    )
}

export default SearchGigs;