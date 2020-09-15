import React from 'react';
import './Jumbotron.css';

const Jumbo = () => {
  return (
    <div>
      <div className='jumbotron-container'>
        <div className='jumbotron'>
          <h1 className='jumbotron-container_heading1'>Welcome to Gigstarter</h1>
          <div className='jumbotron-container_heading2'>"Empowering generations through independent work."</div>
          <div>
            <button className='jumbotron-button'>Let's get started!</button>
            <button className='jumbotron-button'>I want to learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
