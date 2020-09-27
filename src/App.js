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
import Footer from './components/Footer/Footer';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <Route component={Navigation} path='/'/>
            <Route component={Home} exact path='/'/>
            <Route component={Home} exact path='/gigstarter'/>
            <Route component={About} exact path='/about' />
            <Route component={Gigs} exact path='/gigs' />
            <Route component={Login} exact path='/login' />
            <Route component={Signup} exact path='/signup' />
            <Route component={Footer} path='/'/>
        </BrowserRouter>
    );
  }
}

export default App;
