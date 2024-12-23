import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import DzComp from '../components/DzComp'


const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className='btn'>MainPage</div>
            
            <Button name={"Open"} color={'primary'}/>
            <Button name={"Close"} color={'error'}/>
            <Button name={"Save"} color={'secondary'}/>
            <DzComp name={'Kurmanbek'}/>
            <Footer/>
        </div>
    )
}

export default MainPage