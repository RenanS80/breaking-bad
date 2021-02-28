import React from 'react'
import Logo from '../images/logo.png'
import Icon from '../images/icon.svg'

function Header(){
    return(
        <header>
            <a href="#">
                <img className="logo" src={Logo} alt="Breaking Bad logo"></img>
            </a>
            
            <a href="https://www.sonypictures.com/tv/breakingbad" target="_blank">
                <img className="icon" src={Icon} alt="Logo"></img>
            </a>      
        </header>
    );
}

export default Header;