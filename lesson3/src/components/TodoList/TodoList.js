import React from "react";
import classes from "./TodoList.module.scss"
import Todo from "../Todo/Todo";
const TodoList = ({todoList, handleDone, handleDelete}) => {
    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo => <Todo key={todo.id} todo={todo} handleDone={handleDone} handleDelete={handleDelete}/>)
            }
        </ul>
    )
}

export default TodoList