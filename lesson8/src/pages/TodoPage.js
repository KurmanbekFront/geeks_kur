import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/button/Button";
import Modal from "../components/Modal/Modal";
import TodoList from "../components/TodoList/TodoList";
import Pagination from "../components/pagination/Pagination";

const TodoPage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  
  const [ offset, setOffset ] = useState(0);
  const handleShow = (name) => {
    setName(name);
    if (name === "show") setShow((prevState) => !prevState);
    if (name === "show2") setShow2((prevState) => !prevState);
  };
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    // setTodoList((prevState) => [
    //   ...prevState,
    //   {
    //     id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    //     title: inputValue,
    //     completed: false,
    //   },
    // ]);
    addTodo()
  };

  const handleEdit = (todoEdit) => {
    // todoList.map((todo) => {
    //   if (todoEdit.id === todo.id) return (todo.title = todoEdit.title);
    // });
    // setTodoList([...todoList]);
    patchTodo(todoEdit.id, todoEdit.title, true)
  };

  const handleDone = (id) => {
    // todoList.map((todo) => {
    //   if (id === todo.id) {
    //     return (todo.completed = !todo.completed);
    //   }
    // });
    // setTodoList([...todoList]);
    const todo = todoList.find(todo => todo.id === id)
    if (todo) {
      patchTodo(id, !todo.completed)
    }
    fetchApi().then(data=>setTodoList(data))
  };

  const handleDelete = (id) => {
    // let updateList = todoList.filter((todo) => {
    //   return todo.id !== id;
    // });
    // setTodoList([...updateList]);
    deleteTodo(id)
  };
  const deleteTodo = async (id) => {
    const response = await axios.delete(`http://localhost:5000/todo/${id}`)
    fetchApi().then(data=>setTodoList(data))
  };
  const patchTodo = async (id, info, isTitle = false) => {
    const response = await axios.patch(`http://localhost:5000/todo/${id}`, {
      [isTitle ? "title" : "completed"] : info
    })
    fetchApi().then(data=>setTodoList(data))
  };
  const addTodo = async () => {
    const response = await axios.post(`http://localhost:5000/todo`, {
      id: todoList.length === 0 ? "1" : String(Number(todoList[todoList.length - 1].id) + 1),
      title: inputValue,
      completed: false
    })
    fetchApi().then(data=>setTodoList(data))
  };




  // useEffect(() => {
  //   const myLocalStorage = JSON.parse(localStorage.getItem("todo"));
  //   if (myLocalStorage === null) {
  //     return localStorage.setItem("todo", JSON.stringify(todoList));
  //   }
  //   if (myLocalStorage !== 0) {
  //     setTodoList(myLocalStorage);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todoList));
  // }, [todoList]);

const [limit, setLimit] = useState(4)
  const page = (offset / Number(limit)) + 1
  const handleNext = () => {
    setOffset(prevState => prevState + Number(limit))
  }
  const handlePrev = () => {
    if (offset < 1) return
    setOffset(prevState => prevState - Number(limit))
  }

  const fetchApi = async () => {
    try {
        const response = await axios(`http://localhost:5000/todo`);
        return await response.data;
    } catch(e) {
        console.log(e);
    } finally {
        console.log('finally');
    }
};

  useEffect(()=>{
    fetchApi().then(data=>setTodoList(data))
},[])

  return (
    <div>
      <input type="number" onChange={(event)=>setLimit(event.target.value)}/>
      <Pagination page={page} prev={handlePrev} next={handleNext}/>

      <TodoList
        todoList={todoList}
        handleDone={handleDone}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Button handleShow={() => handleShow("show")} name={"Open"} />
      <Button handleShow={() => handleShow("show2")} name={"Open2"} />
      {/* <button onClick={() => handleShow('show')}>Open</button>
            <button onClick={() => handleShow('show2')}>Open2</button> */}
      {show && (
        <Modal
          handleShow={handleShow}
          name={name}
          handleInput={handleInput}
          handleAdd={handleAdd}
        >
          <h1>Hello</h1>
        </Modal>
      )}
      {show2 && (
        <Modal handleShow={handleShow} name={name}>
          <h1>Hello2</h1>
        </Modal>
      )}
    </div>
  );
};

export default TodoPage;


