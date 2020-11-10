import { Divider } from '@material-ui/core'
import React from 'react'
import Logo from '../Logo/Logo'
import './Sidebar.scss'
import {slide as Menu} from 'react-burger-menu'

const Sidebar =()=> {
    return (
        <Menu left>
            <Logo></Logo>
            <Divider></Divider>
            <a className='menu-item'>About me</a>
            <a className='menu-item'>Relationships</a>
            <a className='menu-item'>Users</a>
            <a className='menu-item'>Sign Up</a>
            <a className='menu-item'>Terms and Conditions</a>
            <Divider></Divider>
            <a className='menu-item'>How it works</a>
            <a className='menu-item'>Partnership</a>
            <a className='menu-item'>Help</a>
            <a className='menu-item'>Leave testimonial</a>
            <a className='menu-item'>Contact us</a>
            <Divider></Divider>
            <a className='menu-item'>Articles</a>
            <a className='menu-item'>Our news</a>
            <a className='menu-item'>Testimonials</a>
            <a className='menu-item'>Licenses</a>
            <a className='menu-item'>Privacy Policy</a>
        </Menu>
    
    )
}
export default Sidebar