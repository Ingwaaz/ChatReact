import React from 'react';
import Talk from "talkjs";
import './Chat.scss';

import { dummyUsers } from "../Users/Users";
 
class Chat extends React.Component {
  constructor(props) {
    super(props); 
    let currentUser;
    const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');

    if (currentTalkjsUser) {
      currentUser = JSON.parse(currentTalkjsUser)
    }

    this.state = {
      currentUser,
      userIdState: 2,
    }
  }

  handleClickFloodChat(userId) {
    const { currentUser } = this.state;
    const userIdLocal = userId;

    this.setState({ userIdState: userIdLocal});

    Talk.ready.then(() => {
      const me = new Talk.User(currentUser)
      const other1 = new Talk.User({
        id: "654322",
        name: "Мария",
        email: "sebastian@example.com",
        role: "Member",
      });
      const other2 = new Talk.User({
        id: "456784",
        name: "Артем",
        email: "steve@example.com",
        role: "Member",
      });

      if (!window.talkSession) {
        window.talkSession = new Talk.Session({
        appId: "t1fMFZLu",
        me: me
      });
    }

    if (this.state.userIdState === '3') {
      const conversation = window.talkSession.getOrCreateConversation('ФлудЧат');
      conversation.setParticipant(me);
      conversation.setParticipant(other1);
      conversation.setParticipant(other2);
      conversation.setAttributes({
          photoUrl: "https://demo.talkjs.com/img/11.jpg",
          subject: "Флуд чат для общения",
          welcomeMessages: ["Приветствую всех в общем чате!"]
      })

      this.chatbox = window.talkSession.createChatbox(conversation);
      this.chatbox.mount(this.container);
    } else if ( this.state.userIdState === '2' ) {
      const conversation = window.talkSession.getOrCreateConversation('Рабочий чат');
      conversation.setParticipant(me);
      conversation.setParticipant(other1);
      conversation.setParticipant(other2);
      conversation.setAttributes({
          photoUrl: "https://demo.talkjs.com/img/11.jpg",
          subject: "Рабочий чат для сотрудников компании",
          welcomeMessages: ["Приветствую всех в рабочем чате!"]
      })

      this.chatbox = window.talkSession.createChatbox(conversation);
      this.chatbox.mount(this.container);
    }
      
    })
    .catch(e => console.log(e));
  }

  render() {
    const currentUser = this.state.currentUser;

    return (
      <div className="users">
        <div className="users-container"> 
          <div className="current-user-container">
              {currentUser &&
                <div>
                  <picture className="current-user-picture">
                    <img alt={currentUser.name} src={currentUser.photoUrl} />
                  </picture>
                  <div className="current-user-info">
                    <h3>{currentUser.name}</h3>
                    <p>{currentUser.description}</p>
                  </div>
                </div>
              }
            </div>
          <ul>
            { dummyUsers.map(user => 
              <li key={user.id} className="user">
                <picture className="user-picture">
                  <img src={user.photoUrl} alt={`${user.name}`} />
                </picture>
                <div className="user-info-container">
                  <div className="user-info">
                    <h4>{user.name}</h4>
                    <p>{user.info}</p>
                  </div>
                  <div className="user-action">
                   <button onClick={(userId) => this.handleClickFloodChat(user.id)}>Написать</button>
                  </div>
                </div>
              </li>
            )}
          </ul>
          <div className="chatbox-container" ref={c => this.container = c}>
            <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
         </div>
        </div>
      </div>
    )
  }
}
export default Chat;