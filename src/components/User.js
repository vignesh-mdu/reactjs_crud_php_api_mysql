import React from 'react';

import classes from './User.module.css';

const User = (props) => {
  return (
    <li className={classes.user}>
      <h2>{props.username}</h2>
      <h3>Age: {props.age}</h3>
      <p>Role: {props.role}</p>
    </li>
  );
};

export default User;
