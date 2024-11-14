import React, { useEffect, useState } from "react";
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
    setTodoList((prevState) => [
      ...prevState,
      {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        title: inputValue,
        completed: false,
      },
    ]);
  };

  const handleEdit = (todoEdit) => {
    todoList.map((todo) => {
      if (todoEdit.id === todo.id) return (todo.title = todoEdit.title);
    });
    setTodoList([...todoList]);
  };

  const handleDone = (id) => {
    todoList.map((todo) => {
      if (id === todo.id) {
        return (todo.completed = !todo.completed);
      }
    });
    setTodoList([...todoList]);
  };

  const handleDelete = (id) => {
    let updateList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList([...updateList]);
  };

  

  


  useEffect(() => {
    const myLocalStorage = JSON.parse(localStorage.getItem("todo"));
    if (myLocalStorage === null) {
      return localStorage.setItem("todo", JSON.stringify(todoList));
    }
    if (myLocalStorage !== 0) {
      setTodoList(myLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

const [limit, setLimit] = useState(4)
  const page = (offset / Number(limit)) + 1
  const handleNext = () => {
    setOffset(prevState => prevState + Number(limit))
  }
  const handlePrev = () => {
    if (offset < 1) return
    setOffset(prevState => prevState - Number(limit))
  }

  const fetchApi = async() => {
    try {
        const response =
            await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${offset}`);
        return await response.json();
    } catch(e) {
        console.log(e);
    } finally {
        console.log('finally');
    }
};

  useEffect(()=>{
    fetchApi().then(data=>setTodoList(data))
},[offset, limit])

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
