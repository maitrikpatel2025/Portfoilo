import React, {useState,useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';

const NavBar = () => {
    const[navvisible,setNavvisible] = useState(false);
    const[smallscreen,setSmallscreen] = useState(false);
    
    useEffect(() =>{
        const mediaQuery = window.matchMedia("(mac-width: 700)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        return()=>{
            mediaQuery.removeListener(handleMediaQueryChange);
        };
        },[]);
    

    const handleMediaQueryChange = mediaQuery =>{
        if(mediaQuery.matches){
            setSmallscreen(true);
        }
        else{
            setSmallscreen(false);
        }
    };
    const toggleNav = () =>{
        setNavvisible(!navvisible)
    };
    return (
        <div>
        <div className="Header">
            <img src={require} className="Logo" alt="logo" />
            <CSSTransition
             in={smallscreen || navvisible}
             timeout={350}
             className="NavAnimation"
             unmountOnExit>
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
        </nav>
             </CSSTransition>
             <div onClick={toggleNav} className="Menu">
            <span></span>
            <i className="big bars icon"></i>

             </div>
        </div>
        </div>
    )
};

export default NavBar;