import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import logoWeb from './stackoverflowlogo.png';
import logoMobile from './stackoverflowlogo-mobile.png';
import './navabar.component.css';





const NavBar = () => {
    const history = useHistory();

    function logoutHandler(){
        history.push("/signin");
    }
    return (
        <header>
            <nav>
                <div className="white-header z-depth-1">
                    <a href="#" className=""><img className="hide-on-small-only" width={200} src={logoWeb}></img></a>
                    <a href="#"><img className="hide-on-med-and-up" src={logoMobile} width={50}></img></a>
                  <ul id="" className="left">
                  </ul>
                  <ul id="" className="right">
                    <li ><button  className="black-text" href="">Log In</button></li>
                    <li ><button   className="black-text" href="">Sign Up</button></li>
                  </ul>
                </div>
            </nav>
        </header>

    )
}


export default NavBar;
