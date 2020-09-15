
//Components
import Section1 from './Section1/Section1';
//CSS

//Dependencies
import React from 'react';
import './Sections.css'
import bag from '../../../assets/money-bag.svg'
import shop from '../../../assets/shop.svg'
import presentation from '../../../assets/presentation.svg'
import employee from '../../../assets/employee.svg'
import businessman from '../../../assets/businessman.svg'
import fb from '../../../assets/social/facebook.svg'
import twit from '../../../assets/social/twitter.svg'
import insta from '../../../assets/social/instagram.svg'
import linkedin from '../../../assets/social/linkedin.svg'

const Sections = () => {
  return (
    <div className='section-container'>
      <Section1 />
    </div>
  )
}

export default Sections
