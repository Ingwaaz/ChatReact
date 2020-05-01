import React from 'react';
import Talk from "talkjs";

class Messaging extends React.Component {
  constructor(props) {
    super(props);
 
    this.inbox = undefined;
    let currentUser;
    const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');

    if (currentTalkjsUser) {
        currentUser = JSON.parse(currentTalkjsUser)
    }
 
    this.state = {
      currentUser
    }
  }

  componentDidMount() {
    Talk.ready
      .then(() => {
        const me = new Talk.User(this.state.currentUser);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "t1fMFZLu",
            me: me
          });
        }
        
        this.inbox = window.talkSession.createInbox();
        this.inbox.mount(this.container);
      })
      .catch(e => console.error(e));
    }

  render() {
    return (
      <React.Fragment>
        <div style={{height: '500px'}} className="inbox-container" ref={c => this.container = c}></div>
      </React.Fragment>
    );
  }
}
  
export default Messaging;