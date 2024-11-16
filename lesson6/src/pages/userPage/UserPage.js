import React, { useEffect, useState } from "react";
import classes from "./UserPage.module.scss";
import User from "../../components/User/User";
const BASE_URL = `https://jsonplaceholder.typicode.com`;

// export const fetchApi = (API) => {
//     fetch(`${BASE_URL}/${API}`)
//     .then(response => response.json())
//     .then(data => data)
// }

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [userOne, setUserOne] = useState({});

  const fetchUser = async (API) => {
    const response = await fetch(`${BASE_URL}/${API}`);
    return await response.json();
  };
  const fetchUserOne = async (API, id) => {
    const response = await fetch(`${BASE_URL}/${API}/${id}`);
    const data = await response.json()
    setUserOne(data)
  };

  useEffect(() => {
    fetchUser(`users`).then((data) => setUsers1(data));
  }, []);
  return (
    <div>
      <div className={classes.users}> 
        {users1.map(user => 
            <User user={user} fetchUserOne={fetchUserOne} userOne={userOne} key={user.id}/>
        )}
      </div>
    </div>
  );
};

export default UserPage;
