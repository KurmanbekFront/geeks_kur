import React from "react";
import classes from "./Todo.module.scss"
import Button from "../button/Button";
const Todo = ({todo, handleDone, handleDelete}) => {
    return (
        <li className={`${classes.li} ${todo.completed ? classes.green_Bgc : ""}`}>
            <div className={`${classes.info} ${todo.completed ? classes.text_line : ""}`}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                {/* <p>completed: {todo.completed ? 'true' : "false"}</p> */}
            </div>
            <div className={`${classes.btns} ${todo.completed ? classes.text_line : ""}`}>
                <Button name={"Edit"} action={() => {}} color={'primary'}/>
                <Button name={"Done"} handleShow={() => handleDone(todo.id)} color={'secondary'}/>
                <Button name={"Delete"} handleShow={() => handleDelete(todo.id)} color={'error'}/>
            </div>
        </li>
    )
}

export default Todo