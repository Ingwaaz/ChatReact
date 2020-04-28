import React from 'react';

class UserIcon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span>{this.props.userName}</span>
        <div 
          className={
              this.props.showSettingIcon ? this.props.classNameUserIcon + `__icon active` :  this.props.classNameUserIcon + `__icon`
            }
          onClick={this.props.functionClick}
          onMouseLeave={this.props.functionMouseLeave}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default UserIcon;
