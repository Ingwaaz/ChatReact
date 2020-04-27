import React, { Component } from 'react';
import './header.scss';

import LogoHeader from '../elementHeader/logoHeader/logoHeader';
import RoomTitle from '../elementHeader/roomTitle/roomTitle';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__logo">
            <LogoHeader />
          </div>
          <div className="header__chatroomTitle">
            <RoomTitle chatroomName="worki"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
