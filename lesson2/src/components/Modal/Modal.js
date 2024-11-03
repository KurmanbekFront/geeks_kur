import React from 'react'
import classes from './Modal.module.scss'
import Input from '../Input/Input'


const Modal = ({children, handleShow, name, handleInput}) => {
    return (
        <div>
            <div className={classes.wrapper}></div>
            <div className={classes.content}>
                <button onClick={() => handleShow(name)}>Close</button>
                <Input placeholder={'Введите текст'} action={handleInput}/>
                {children}
            </div>
        </div>
    )
}

export default Modal