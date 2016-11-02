import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'

import {signup, login, logout, show } from './util/session_api_util';
import configStore from './store/store';

document.addEventListener("DOMContentLoaded", ()=>{
  let store
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configStore(preloadedState);
  } else {
    store = configStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);



  // window.login = login;
  // window.logout = logout;
  // window.show = show;
  // window.signup = signup;
  window.store = configStore();
})
