import { Divider } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Menu.scss'

const Menu =()=> {
    return (
        <div className='menu'>
            <Logo></Logo>
            <Divider></Divider>
            <Link>About me</Link>
            <Link>Relationships</Link>
            <Link>Users</Link>
            <Link>Sign Up</Link>
            <Link>Terms and Conditions</Link>
            <Divider></Divider>
            <Link>How it works</Link>
            <Link>Partnership</Link>
            <Link>Help</Link>
            <Link>Leave testimonial</Link>
            <Link>Contact us</Link>
            <Divider></Divider>
            <Link>Articles</Link>
            <Link>Our news</Link>
            <Link>Testimonials</Link>
            <Link>Licenses</Link>
            <Link>Privacy Policy</Link>
        </div>
    )
}
export default Menu