import React from 'react';
import './sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSidebar: false,
      roomsActive: false,
      membersActive: false,
    }

    this.activateSidebar = this.activateSidebar.bind(this);
    this.deactivateSidebar = this.deactivateSidebar.bind(this);
    this.changeRoomsActive = this.changeRoomsActive.bind(this);
    this.changeMembersActive = this.changeMembersActive.bind(this);
  }

  activateSidebar() {
    this.setState({ activeSidebar: true});
  }

  deactivateSidebar() {
    this.setState({ activeSidebar: false });
  }

  changeRoomsActive() {
    this.setState({ roomsActive : !this.state.roomsActive });
  }

  changeMembersActive() {
    this.setState({ membersActive : !this.state.membersActive });
  }

  render() {
    return (
      <div 
        className={ this.state.activeSidebar ? 'sidebar active' : 'sidebar' }
        onClick={this.activateSidebar}
        onMouseLeave={this.deactivateSidebar}  
      >
        <div className="sidebar__wrapper">
          <div 
            className={
              this.state.roomsActive ? 'sidebar__wrapper__rooms active' : 'sidebar__wrapper__rooms'
            }
            >
            <span onClick={this.changeRoomsActive}>Чаты-комнаты</span>
            <div 
              className={
                this.state.roomsActive ? 'sidebar__wrapper__rooms__wrapper active' : 'sidebar__wrapper__rooms__wrapper'
              }
            >
              <span>Вынести отдельным компонентом чатики</span>
            </div>
          </div>
          <div 
            className={
              this.state.membersActive ? 'sidebar__wrapper__members active' : 'sidebar__wrapper__members'
            }
          >
            <span onClick={this.changeMembersActive}>Друзья</span>
            <div 
              className={
                this.state.membersActive ? 'sidebar__wrapper__members__wrapper active' : 'sidebar__wrapper__members__wrapper'
              } 
            >
              <span>Вынести отдельным компонентом Друзей</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
