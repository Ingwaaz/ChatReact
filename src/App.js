import React from 'react';
import './App.scss';

import Header from './components/header/header';
import Main from './components/main/main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatroomName: 'ChatRoom Name',
      user: {
        userName: 'Andrey',
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Main />
      </div>
    )
  }
}

export default App;
