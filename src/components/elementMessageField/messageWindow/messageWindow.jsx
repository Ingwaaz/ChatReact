import React from 'react';

class MessageWindow extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.messages.map((item) => 
          <div className={
              this.props.classNameMessage + '__item'
            }
            key={item.idMessage}
          >
            <div className={ this.props.classNameMessage + '__item__icon' }> <span>{item.sender.slice(0,1)}</span> </div>
            <div className={
                this.props.classNameMessage + '__item__wrapper'
              }
            >
              <div className={ this.props.classNameMessage + '__item__wrapper__text' }>
                <p>{item.content}</p>
              </div>
              <div className={ this.props.classNameMessage + '__item__wrapper__time' } >
                <span>{item.time}</span>
              </div> 
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MessageWindow;
