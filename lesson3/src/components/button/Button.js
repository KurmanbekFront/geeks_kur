import React from "react"
import classes from './Button.module.css'

const Button = ({handleShow, name, color}) => { 
    return (
           <button onClick={handleShow} className={`${classes.btn} ${classes[color]}`} >{name}</button>
    )
}

export default Button