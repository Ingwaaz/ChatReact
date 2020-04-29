import React from 'react';
import './messageField.scss';

import MessageFieldHeader from '../elementMessageField/messageFieldHeader/messageFieldHeader';
import MessageWindow from '../elementMessageField/messageWindow/messageWindow';

class MessageField extends React.Component {
  render() {
    return (
      <div className='messageField'>
        <div className="messageField__header">
          <MessageFieldHeader  roomsChat={this.props.roomsChat} />
        </div>
        <div className="messageField__body">
          <div className="messageField__body__message_window">
            <MessageWindow messages={this.props.messages} classNameMessage="messageField__body__message_window"/>
          </div>
          <div className="messageField__body__message_send">
            <textarea placeholder="Напишите что нибудь"/>
            <div className="messageField__body__message_send__btn">
              <span>Отправить</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageField;
