//Dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Navigation from './components/About/About';
import Navigation from './components/Gigs/Gigs';
import Navigation from './components/Login/Login';
import Navigation from './components/Signup/Signup';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className='container-main'>
            <Route className='navigation' path='/' component={Navigation} />
            <Route className='navigation' component={About} exact path='/about'/>
            <Route className='navigation' component={Gigs} exact path='/gigs'/>
            <Route className='navigation' component={Login} exact path='/login'/>
            <Route className='navigation' component={Signup} exact path='/signup'/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
