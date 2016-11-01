import React from 'react';
import ReactDOM from 'react-dom';

import {signup, login, logout, show } from './util/session_api_util';


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Locally</h1>, root)


  window.login = login;
  window.logout = logout;
  window.show = show;
  window.signup = signup;
})
