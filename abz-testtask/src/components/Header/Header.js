import React from 'react'
import Logo from '../Logo/Logo'
import Sidebar from '../Menu/Sidebar'
import './Header.scss'

const Header = ()=> {
    return (
        <div className="header">
           <Logo/> 
           <Sidebar />
        </div>
    )
}
export default Header