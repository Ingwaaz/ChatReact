import React from 'react';

function RoomList(props) {
    return (
      <React.Fragment>
       { props.roomsChat.map((item) => 
        <div 
          className={ props.classNameRooms + 'item'}
          key={item.id}
        >
          <span>{item.roomsName}</span>
        </div>
       )}
      </React.Fragment>
    )
}

export default RoomList;
