//Dependencies
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

//CSS
import "./Navigation.css";

const Navigation = (props) => {

  const handleLogout = async () => {
      await props.handleLoginLogout();
      props.history.push('/login');
  };

  const loggedIn = () => {
    if (!props.loggedIn) {
      return (
        <div className="nav-right">
          <Link to="/login" className="nav-right__item nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-right__item nav-link">
            Sign Up
          </Link>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <button onClick={() => handleLogout()} className="nav-right__button">
            Logout
          </button>
        </div>
      );
    }
  };

  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-left__item nav-link">
            Gigstarter
          </Link>
          <Link to="/about" className="nav-left__item nav-link">
            About
          </Link>
          <Link to="/gigs" className="nav-left__item nav-link">
            Gigs
          </Link>
        </div>
        {loggedIn()}
      </div>
      <div className="nav-container-mobile">
        <Menu width={"50%"}>
          <Link to="/" className="menu-item">
            Gigstarter
          </Link>
          <Link to="/about" className="menu-item">
            About
          </Link>
          <Link to="/gigs" className="menu-item">
            Gigs
          </Link>
          <Link to="/login" className="menu-item">
            Login
          </Link>
          <Link to="/register" className="menu-item">
            Sign Up
          </Link>
        </Menu>
      </div>
    </Fragment>
  );
};

export default withRouter(Navigation);
