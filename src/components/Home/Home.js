import React, { Fragment } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Sections from './Sections/Sections';

class Home extends React.Component {
    render() {
        return (
          <div>
            <Jumbotron />
            <Sections />
          </div>
        );
      }
}

export default Home;