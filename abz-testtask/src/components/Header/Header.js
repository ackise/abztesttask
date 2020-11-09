import React from 'react'
import BurgerMenu from '../Burger_menu/BurgerMenu'
import Logo from '../Logo/Logo'
import './Header.scss'

const Header = ()=> {
    return (
        <div className="header">
           <Logo/><BurgerMenu/>
        </div>
    )
}
export default Header