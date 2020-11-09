import React from 'react'
import Burger from '../../assets/menu-icon.svg'
import './BurgerMenu.scss'

const BurgerMenu = ()=> {
    return (
        <div className='burger-menu'>
            <img src={Burger} alt='burger-menu'/>
        </div>
    )
}
export default BurgerMenu