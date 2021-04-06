import React, { Component } from 'react';
import './style.css';
import {Link as LinkScroll} from 'react-scroll';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <header id="header" className="header">
                <div className="container header__menu">
                    <div className="header__logo">
                    <span>Chopperxx</span>
                    </div>
                    <ul>
                        <li><LinkScroll activeClass="enable" to="header__view" spy={true} smooth={true} duration={1000}>Home<div className="lineBot"></div></LinkScroll></li>
                        <li><LinkScroll activeClass="enable" to="work" spy={true} smooth={true} duration={1000}>Works<div className="lineBot"></div></LinkScroll></li>
                        <li><LinkScroll activeClass="enable" to="about" spy={true} smooth={true} duration={1000}>About<div className="lineBot"></div></LinkScroll></li>
                        <li><LinkScroll activeClass="enable" to="contacts" spy={true} smooth={true} duration={1000}>Contacts<div className="lineBot"></div></LinkScroll></li>
                    </ul>
                </div>
                
            </header>
         );
    }
}
 
export default Header;

//id="scrollMenu"