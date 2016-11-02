import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <ul>
      <li><Link to="/login" activeClassName="current">LOGIN</Link></li>
      <li><Link to="/signup" activeClassName="current">SIGN UP!</Link></li>
    </ul>
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
