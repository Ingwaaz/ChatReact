import React from 'react';

function Members(props) {
    return (
      <React.Fragment>
       { props.members.map((item) => 
        <div 
          className={ props.classNameMembers + 'item'}
          key={item.id}
        >
          <span>{item.membersName}</span>
          <div className={props.classNameMembers + 'item ' + item.status}></div>
        </div>
       )}
      </React.Fragment>
    )
}

export default Members;