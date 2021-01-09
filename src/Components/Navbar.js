import React from 'react';
import PSTB from '../Pictures/PSTB.png'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link, animateScroll as scroll } from "react-scroll";

import './Navbar.css'


const Navbar = () => {
    return(
        <AppBar position="fixed" className='AppBar'>
            <ToolBar>
              <div className='logo'>
                <img id='NavbarLogo'src={PSTB} alt="logo"/>
              </div>
              <div className='Links'>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={-25} duration={500} style={{ color:'#FEF102', font: 'Helvetica', fontSize: 30, paddingRight: '5%'}}>About</Link>
                <Link activeClass="active" to="Services" spy={true} smooth={true} offset={-25} duration={500} style={{ color:'#FEF102', font: 'Helvetica', fontSize: 30, paddingRight: '5%'}}>Services</Link>
                <Link activeClass="active" to="Testimonials" spy={true} smooth={true} offset={-25} duration={500} style={{ color:'#FEF102', font: 'Helvetica', fontSize: 30, paddingRight: '5%'}}>Testimonials</Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-25} duration={500} style={{ color:'#FEF102', font: 'Helvetica', fontSize: 30, paddingRight: '5%'}}>Contact</Link>
              </div>
            </ToolBar>
        </AppBar>
    );
};

export default Navbar;






