import React, { useRef } from 'react';

import classes from './AddUser.module.css';

function AddUser(props) {
  const usernameRef = useRef('');
  const ageRef = useRef('');
  const roleRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();
    const user = {
      username: usernameRef.current.value,
      age: ageRef.current.value,
      role: roleRef.current.value,
    };
    console.log(user,'user in submitHandler');
    if(user.username === '' && user.age === '' && user.role === '') {
        return;
    }
    else {
        props.onAddUser(user);

    }

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' ref={usernameRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor='age'>Age</label>
        <input type='text' id='age' ref={ageRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Role</label>
        <input type='text' id='role' ref={roleRef} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default AddUser;
