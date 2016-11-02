import React from 'react';
import {Link} from 'react-router';
import Header from './greeting/header_container';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default App;
