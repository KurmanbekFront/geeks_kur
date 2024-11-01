import React from "react"
import classes from './Button.module.css'

const Button = ({name, color}) => {
    console.log(color);
    
    return (
           <button className={`${classes.btn} ${classes[color]}`} >{name}</button>
    )
}

export default Button