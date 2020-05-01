import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';

import Login from './components/Login/Login';
import Chat from './components/Chats/Chat';
import Messaging from './components/Messaging/Messaging';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
 }

  render() {
    return (
      <div className="App">
        <Router>
          <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__list__item">
                  <Link to="/chats" className="navbar__list__item__link">Чаты</Link>
                </li>
                <li className="navbar__list__item">
                  <Link to="/messaging" className="navbar__list__item__link">Сообщения</Link>
                </li>
            </ul>
          </nav>
          <Route path="/" exact component={Login}/>
          <Route path="/chats" component={Chat}/>
          <Route path="/messaging" component={Messaging}/>
        </Router>
      </div>
    )
  }
}

export default App;
