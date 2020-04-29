import React from 'react';

function messageFieldHeader(props) {
  let activeRoomNow = '';
  for (let i = 0; i < props.roomsChat.length; i++) {
    if ( props.roomsChat[i].activeRoom === true) {
      activeRoomNow = props.roomsChat[i].roomsName;
    }
  }


  return (
    <React.Fragment>
      <span>{activeRoomNow}</span>
      <span>Участников: 3</span>
    </React.Fragment>
  )
}

export default messageFieldHeader;
