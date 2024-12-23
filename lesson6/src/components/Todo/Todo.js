import React, { useState } from "react";
import classes from "./Todo.module.scss"
import Button from "../button/Button";
const Todo = ({todo, handleDone, handleDelete, handleEdit, setCurrentId, isEdit}) => {

    const [inputValue, setInputValue] = useState(todo.title)
    return (
        <>
        <li className={`${classes.li} ${todo.completed ? classes.green_Bgc : ""}`}>
            <div className={`${classes.info} ${todo.completed ? classes.text_line : ""}`}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                {/* <p>completed: {todo.completed ? 'true' : "false"}</p> */}
            </div>
            <div className={`${classes.btns} ${todo.completed ? classes.text_line : ""}`}>
                <Button name={"Edit"} handleShow={() => setCurrentId(todo.id)} color={'primary'}/>
                <Button name={"Done"} handleShow={() => handleDone(todo.id)} color={'secondary'}/>
                <Button name={"Delete"} handleShow={() => handleDelete(todo.id)} color={'error'}/>
            </div>
        </li>
        {
            isEdit && <div className={classes.li}>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            {/* Закрытие инпута*/}
            <Button name={"Save"} color={"primary"} handleShow={() => {
                handleEdit({...todo, title: inputValue})
                setCurrentId(null)
            }
            }/>
            {/* Закрытие без сохранения изменений */}
            <Button name={"Cancel"} color={"error"} handleShow={() => {
                setInputValue(todo.title)
                setCurrentId(null)
            }}/>
            </div>
        }
        </>
    )
}

export default Todo