import React from 'react';
import './main.scss';

import Sidebar from '../sidebar/sidebar';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
      </div>
    );
  }
}

export default Main;
