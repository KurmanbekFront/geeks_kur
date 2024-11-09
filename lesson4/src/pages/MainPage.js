import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/button/Button";
import Dz1 from "../components/Dz1";
import Example from "../components/Example/Example";
import Modal from "../components/Modal/Modal";
import TodoList from "../components/TodoList/TodoList";
import Count from "../components/Count/Count";

const MainPage = () => {
  



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
     
      <Count />
      
    </div>
  );
};

export default MainPage;
