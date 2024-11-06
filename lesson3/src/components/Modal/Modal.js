import React from 'react'
import classes from './Modal.module.scss'
import Input from '../Input/Input'
import Button from '../button/Button'


const Modal = ({children, handleShow, name, handleInput, handleAdd}) => {
    return (
        <div>
            <div className={classes.wrapper}></div>
            <div className={classes.content}>
                <Button handleShow={() => handleShow(name)} name={"Close"}/>
                {/* <button onClick={() => handleShow(name)}>Close</button> */}
                <Input placeholder={'Введите текст'} action={handleInput}/>
                <Button handleShow={handleAdd} name={"Add"}/>
                {children}
            </div>
        </div>
    )
}

export default Modal