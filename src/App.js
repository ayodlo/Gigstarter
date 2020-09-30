//Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// Components
import About from "./components/About/About";
import Gigs from "./components/Gigs/Gigs";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      name: '',
      email: '',
      joined: '',
      loggedIn: false,
    };
    this.handleLoginLogout = this.handleLoginLogout.bind(this);
  }

  handleLoginLogout = (userId) => {
    this.setState(
      (state) => {
        return { loggedIn: !state.loggedIn };
      },
      () => this.handleUserId(userId)
    );
  };

  handleUserId = (userId) => {
    if (this.state.loggedIn === true) {
      this.setState(() => {
        return { userId };
      });
    } else {
      this.setState(() => {
        return { userId: null };
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={(props) => (
            <Navigation
              {...props}
              loggedIn={this.state.loggedIn}
              handleLoginLogout={this.handleLoginLogout}
            />
          )}
        />
        <Route component={Home} exact path="/" />
        <Route component={Home} exact path="/gigstarter" />
        <Route component={About} exact path="/about" />
        <Route component={Gigs} exact path="/gigs" />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login {...props} handleLoginLogout={this.handleLoginLogout} />
          )}
        />
        <Route component={Register} exact path="/register" />
        <Route component={Footer} path="/" />
      </BrowserRouter>
    );
  }
}

export default App;
