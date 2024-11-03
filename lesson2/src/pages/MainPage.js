import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Dz1 from "../components/Dz1";
import Example from "../components/Example/Example";
import Modal from "../components/Modal/Modal";
import Count from "../components/Count/Count";
import List from "../components/List/List";

const MainPage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleShow = (name) => {
    setName(name);
    if (name === "show") setShow((prevState) => !prevState);
    if (name === "show2") setShow2((prevState) => !prevState);
  };
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const arr = [
    {
      id: 1,

      title: "coding",

      completed: false,
    },

    {
      id: 2,

      title: "eat",

      completed: false,
    },

    {
      id: 3,

      title: "sleep",

      completed: false,
    },
  ];

  return (
    <div>
      {/* <Header/>
            <div className='btn'>MainPage</div>
            
            <Button name={"Open"} color={'primary'}/>
            <Button name={"Close"} color={'error'}/>
            <Button name={"Save"} color={'secondary'}/>
            <Dz1 name={'Kurmanbek'}/>
            <Footer/> */}
      {/* <Example name={"Kurman"}>
                <div style={{backgroundColor: "blue"}}>
                    <p style={{color: "red"}}>Name Kurmanbek</p>
                </div>
            </Example> */}
      inputValue: {inputValue}
      <Button handleShow={() => handleShow("show")} name={"Open"} />
      <Button handleShow={() => handleShow("show2")} name={"Open2"} />
      {/* <button onClick={() => handleShow('show')}>Open</button>
            <button onClick={() => handleShow('show2')}>Open2</button> */}
      {show && (
        <Modal handleShow={handleShow} name={name} handleInput={handleInput}>
          <h1>Hello</h1>
        </Modal>
      )}
      {show2 && (
        <Modal handleShow={handleShow} name={name}>
          <h1>Hello2</h1>
        </Modal>
      )}
      <Count />
      <List arr={arr}/>
    </div>
  );
};

export default MainPage;
