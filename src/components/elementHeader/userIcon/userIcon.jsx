import React, { Component, useReducer } from 'react';

class UserIcon extends Component {
  render() {
    return (
      <React.Fragment>
        <span>{this.props.userName}</span>
        <div className="userIcon__icon"></div>
      </React.Fragment>
    );
  }
}

export default UserIcon;
