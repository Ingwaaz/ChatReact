import React, { Component } from 'react';
import './header.scss';

import LogoHeader from '../elementHeader/logoHeader/logoHeader';
import UserIcon from '../elementHeader/userIcon/userIcon';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettingIcon: false,
    }

    this.activateShowSettingIcon = this.activateShowSettingIcon.bind(this);
    this.deactivateShowSettingIcon = this.deactivateShowSettingIcon.bind(this);
  }

  activateShowSettingIcon() {
    this.setState({ showSettingIcon : true });
  }
  deactivateShowSettingIcon() {
    this.setState({ showSettingIcon : false });
  }

  render() {
    const showSettingIcon = this.state.showSettingIcon;
    return (
      <div className="header">
        <div className="header__logo">
          <LogoHeader />
        </div>
        <div className="header__user">
          <UserIcon 
            userName={this.props.user.userName} 
            classNameUserIcon="header__user"
            showSettingIcon={showSettingIcon}
            functionClick={this.activateShowSettingIcon}
            functionMouseLeave={this.deactivateShowSettingIcon}
          >
            <div className={
              showSettingIcon ? "header__user__icon__settings active" : "header__user__icon__settings"
            }>
              <span>Настройки</span>
              <span>Профиль</span>
            </div>
          </UserIcon>
        </div>
      </div>
    )
  }
}

export default Header;
