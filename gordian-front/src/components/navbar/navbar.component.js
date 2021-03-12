import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import logoWeb from './stackoverflowlogo.png';
import logoMobile from './stackoverflowlogo-mobile.png';
import './navabar.component.css';
import searchIcon from './searchicon.png';





const NavBar = () => {
    const history = useHistory();

    function logoutHandler(){
        history.push("/signin");
    }
    return (
        <header>
            <nav>
                <div className="z-depth-1 whiteheader">
                    <a href="#" className=""><img className="hide-on-small-only" width={200} src={logoWeb}></img></a>
                    <a href="#"><img className="hide-on-med-and-up" src={logoMobile} width={50}></img></a>
                  <ul id="" className="left">
                  </ul>
                  <ul id="" className="right">
                    <li><img src={searchIcon} width={40} className="navbar-down"/></li>
                    <li ><button  className="btn blue lighten-4 blue-text border" href="">Log In</button></li>
                    <li ><button   className="btn blue" href="">Sign Up</button></li>
                  </ul>
                </div>
            </nav>
        </header>

    )
}


export default NavBar;
