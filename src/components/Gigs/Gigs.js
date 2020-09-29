import React from 'react';
import GigDetails from './GigDetails/GigDetails';
import SearchGigs from './SearchGigs/SearchGigs';
import SearchLocations from './SearchLocations/SearchLocations';
import SearchResults from './SearchResults/SearchResults';
import './Gigs.css';

const Gigs = () => {
    return (
        <div className='Gigs'>
            <div className='Gigs__searchBars'>
                <SearchGigs />
                <SearchLocations />
            </div>
            <div className='Gigs__searchResults'>
                <SearchResults />
                <GigDetails />
            </div>
        </div>
    )
}

export default Gigs;