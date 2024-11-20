import React from 'react'
import classes from './ModalPokemon.module.scss'
import Button from '../button/Button';



const ModalPokemon = ({children, handleShow}) => {
    return (
        <div>
            <div className={classes.wrapper}/>
            <div className={classes.content}>
                <Button name={'Закрыть'} handleShow={()=>handleShow()}/>
                {children}
            </div>
        </div>
    );
};

export default ModalPokemon