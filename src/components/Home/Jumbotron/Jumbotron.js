import React from 'react';
import './Jumbotron.css';

const Jumbotron = () => {
  return (
    <div className='Jumbotron'>
      <h1 className='Jumbotron__heading1'>Welcome to Gigstarter</h1>
      <div className='Jumbotron__heading2'>"Empowering generations through independent work."</div>
      <div className='Jumbotron__buttons'>
        <button className='Jumbotron__buttons__button'>Let's get started!</button>
        <button className='Jumbotron__buttons__button'>I want to learn more</button>
      </div>
    </div>
  );
};

export default Jumbotron;
