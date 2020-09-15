//Dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Components
import About from './components/About/About';
import Gigs from './components/Gigs/Gigs';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Signup from './components/Signup/Signup';

class App extends React.Component {

  render() {
    return (
      <div className='app-container'>
        <div className='app-container-black-overlay'>
        <BrowserRouter>
          <div className='app-container-main'>
            <Route className='navigation' component={Navigation} path='/'/>
            <Route className='navigation' component={Home} exact path='/'/>
            <Route className='navigation' component={About} exact path='/about' />
            <Route className='navigation' component={Gigs} exact path='/gigs' />
            <Route className='navigation' component={Login} exact path='/login' />
            <Route className='navigation' component={Signup} exact path='/signup' />
          </div>
        </BrowserRouter>
        </div >
      </div>
    );
  }
}

export default App;
