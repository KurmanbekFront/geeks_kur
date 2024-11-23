import React, { useState } from "react";
import classes from "./TodoList.module.scss"
import Todo from "../Todo/Todo";
const TodoList = ({todoList, handleDone, handleDelete, handleEdit}) => {
    const [currentId, setCurrentId] = useState(null)
    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo => <Todo key={todo.id} 
                    todo={todo} 
                    handleDone={handleDone} 
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit}
                    setCurrentId={setCurrentId}
                    isEdit={currentId === todo.id}
                    />)
            }
        </ul>
    )
}

export default TodoList