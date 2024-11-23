import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Fetch.module.scss";
const BASE_URL = `http://localhost:5000/student`;
const Fetch = () => {
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState([]);

  

  const getStudents = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  };

  const postStudent = async () => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-type": "application-json",
      },
      body: JSON.stringify({
        id: String(Number(students[students.length - 1].id) + 1),
        surname: "uulu",
        name: "kurman",
        groupId: 4,
      }),
    });
    console.log(response, "response");
    await getStudents().then((data) => setStudents(data));
  };

  const getAxios = async () => {
    const response = await axios(BASE_URL);
  };
  const postAxios = async () => {
    const response = await axios.post(BASE_URL, {
      id: String(Number(students[students.length - 1].id) + 1),
      surname: "uulu",
      name: "kurman",
      groupId: 4,
    });
    await getStudents().then((data) => setStudents(data));
  };
  const putAxios = async (id) => {
    const response = await axios.put(`${BASE_URL}/${id}`, {
        surname: "brrrr",
        name: "krrrrr",
    })
    await getStudents().then((data) => setStudents(data));
  }
  const patchAxios = async (id) => {
    const response = await axios.patch(`${BASE_URL}/${id}`, {
        name: "dddddadddd",  
    })
    await getStudents().then((data) => setStudents(data));
  }
  
  const deleteAxios = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`)
    await getStudents().then((data) => setStudents(data));
  }

  const getUser = async () => {
    const response = await axios(`http://localhost:5000/user`);
    return response.data
  }
  useEffect(() => {
    getStudents().then((data) => setStudents(data));
    getAxios();
    getUser().then((response) => setUsers(response))
  }, [users]);
  return (
    <div className={classes.students}>
      <button onClick={() => postStudent()}>FETCH POST</button>
      <button onClick={() => postAxios()}>AXIOS POST</button>
      <button onClick={() => putAxios(5)}>AXIOS PUT</button>
      <button onClick={() => patchAxios(5)}>AXIOS PATCH</button>

      
        {users.map(user => <div key={user.id} className={classes.student}>
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
          <div>user: {user.email}</div>
          <div>password: {user.password}</div>
        </div>)}

        {/* {students.map((student) => (
        <div key={student.id} className={classes.student}>
          <div>id: {student.id}</div>
          <div>name: {student.name}</div>
          <div>groupId: {student.groupId}</div>
          <button onClick={() => deleteAxios(student.id)}>DELETE</button>
        </div>
      ))} */}
    </div>
  );
};

export default Fetch;
