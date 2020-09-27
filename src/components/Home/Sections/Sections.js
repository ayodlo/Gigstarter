
//Components
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
//CSS

//Dependencies
import React from 'react';
import './Sections.css'

const Sections = () => {
  return (
    <div className='section-container'>
      <Section1 />
      <hr />
      <Section2 />
      <hr />
      <Section3 />
      <hr />
      <Section4 />
      <hr />
    </div>
  )
}

export default Sections
