import React from 'react';
import './main.scss';

import Sidebar from '../sidebar/sidebar';
import MessageField from '../messageField/messageField';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomsChat: [
        {
          id: 1,
          roomsName: 'Рабочий чат',
          activeRoom: true,
        },
        {
          id: 2,
          roomsName: 'Флудильня',
          activeRoom: null,
        }
      ],
      members: [
        {
          id: 1,
          membersName: 'Анатолий',
          status: 'online',
          roomsMember: ['Рабочий чат', 'Флудильня'],
        },
        {
          id: 2,
          membersName: 'Геннадий',
          status: 'busy',
          roomsMember: ['Флудильня'],
        },
        {
          id: 3,
          membersName: 'Мария',
          status: 'notOnline',
          roomsMember: ['Рабочий чат'],
        },
      ]
    }
  }
  
  render() {
    return (
      <div className="main">
        <Sidebar roomsChat={this.state.roomsChat} members={this.state.members}/>
        <MessageField  roomsChat={this.state.roomsChat} messages={this.props.messages}/>
      </div>
    );
  }
}

export default Main;
