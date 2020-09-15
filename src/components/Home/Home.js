import React, { Fragment } from 'react';
import Jumbo from './Jumbotron/Jumbotron';
import Sections from './Sections/Sections';

class Home extends React.Component {
    render() {
        return (
          <div>
            <Jumbo />
            <Sections />
          </div>
        );
      }
}

export default Home;