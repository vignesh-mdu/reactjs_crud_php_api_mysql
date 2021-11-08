import React from 'react';

import User from './User';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  /*const editUser = (id) => {
    console.log(id,'id');
  }*/

  return (
    <ul className={classes['users-list']}>
      {props.users.map((user,index) => (
            <User
              key={user.id}
              username={user.username}
              age={user.age}
              role={user.role}
            />
            /*<button key={user.id} onClick={()=>editUser(user.id)}>Edit</button>*/

      ))}
    </ul>
  );
};

export default UsersList;
