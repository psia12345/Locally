import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">LOGIN</Link>
    <br />
    <Link to="/signup" activeClassName="current">SIGN UP!</Link>
  </nav>
)

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.email}!</h2>
    <button className="header-button" onClick={logout}>LOG OUT</button>
  </hgroup>
)

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
