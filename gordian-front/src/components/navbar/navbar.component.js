import React, { useEffect, useState } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import logoWeb from './stackoverflowlogo.png';
import logoMobile from './stackoverflowlogo-mobile.png';
import './navabar.component.css';
import searchIcon from './searchicon.png';
import axios from 'axios';





const NavBar = () => {
    const history = useHistory();
    const [ loggedIn, setLoggedIn ] = useState(window.localStorage.getItem('loggedin'));
    useEffect(() => {
        setLoggedIn(window.localStorage.getItem('loggedin'))
        console.log(window.localStorage.getItem('loggedin'))
    })

    function logoutHandler(){
        //axios.post('http://localhost:4000/logout')
        
        axios.post('https://gordianinterview.herokuapp.com/logout')
            .then((response) => {
                console.log(response);
            },(error) => {
                console.log(error);
            })
        window.localStorage.setItem('loggedin', false)
        setLoggedIn(false);
        console.log(loggedIn);

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
                      {
                      loggedIn && 

                    <li ><button onClick={logoutHandler}  className="btn blue" href="">
                      Sign Out
                    </button></li>
                      }
                  </ul>
                </div>
            </nav>
        </header>

    )
}


export default NavBar;
