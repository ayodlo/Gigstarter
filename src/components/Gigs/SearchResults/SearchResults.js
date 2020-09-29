import React from 'react';
import { dummyGigs } from '../../../shared/util';
import './SearchResults.css';

const SearchResults = () => {

    const gigs = dummyGigs.map((gig) => {
        return (
            <div className='SearchResults__jobCard'>
                <p className='SearchResults__jobCard__title'>{gig.jobTitle}</p>
                <p className='SearchResults__jobCard__company'>{gig.jobCompany}</p>
                <p className='SearchResults__jobCard__address'>{gig.jobAdd1}</p>
                <span className='SearchResults__jobCard__payRate'>${gig.jobPay} | </span>
                <span className='SearchResults__jobCard__payFrequency'>💼 {gig.jobPayType}</span>
            </div>
        )
    })


    return (
        <div className='SearchResults'>
            {gigs}
        </div>
    )

}

export default SearchResults;