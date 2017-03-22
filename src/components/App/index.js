import React from 'react';
import AppHeader from '../AppHeader';
import Menu from '../Menu';

import './index.css';

const App = ({children}) => {
  return (
    <div className="App">
      <AppHeader/>
      <div className="Content-Container">
        <Menu></Menu>
        <div className="Content">
          {children}
        </div>
      </div>
    </div>
  )
};

export default App;
