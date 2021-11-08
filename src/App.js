import React, { useState, useEffect, useCallback } from 'react';

import UsersList from './components/UsersList';
import AddUser from './components/AddUser';


import './App.css';
function App() {
  const [users, setUsers] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);
    const fetchUsersHandler = useCallback(async () => {
    //setIsLoading(true);
    //setError(null);
    try {
      const response = await fetch('http://localhost/reactjs/sending_post_request/api.php');
      if (!response.ok) {
        throw new Error('Err!');
      }
      const data = await response.json();
      const loadedUsers = [];
      for (const key in data) {
        loadedUsers.push({
          id: key,
          username: data[key].username,
          age: data[key].age,
          role: data[key].role,
        });
      }
      setUsers(loadedUsers);
    } catch (error) {
      //setError(error.message);
    }
    //setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);
  async function addUserHandler(user) {
    const response = await fetch('http://localhost/reactjs/sending_post_request/api.php', {
      method: 'POST',
      body: "my_data="+JSON.stringify(user),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p className="colorWhite">Found no Users.</p>;
  if (users.length > 0) {
    content = <UsersList users={users} />;
  }
  /*
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  */
  return (
      <React.Fragment>
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <AddUser onAddUser={addUserHandler} />
                      <button onClick={fetchUsersHandler}>Fetch Users</button>
                  </div>
                  <div className="col-md-9">
                      {content}
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
}
export default App;
