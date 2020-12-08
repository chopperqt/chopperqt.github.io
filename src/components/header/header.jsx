import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import Logo from './materials/logo.png';

//images 
import line from './materials/line.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <header className="header">
                <div className="container header__menu">
                    <div className="header__logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link><div className="lineBot"></div></li>
                        <li><Link to="/about">About</Link><div className="lineBot"></div></li>
                        <li><Link to="/contact">Contacts</Link><div className="lineBot"></div></li>
                    </ul>
                </div>
                <div className="container__max header__view">
                    <h1>hi there!</h1>
                    <p>My name is Ilya. I am a student  and <br/> i want to be a frontend developer</p>
                    <LinkScroll activeClass="active" to="works" spy={true} smooth={true} duration={1000}><button onClick={this.props.scrollToBottom} className="scrollBtn"><i class="fas fa-arrow-down"></i></button></LinkScroll>
                    
                </div>
            </header>
         );
    }
}
 
export default Header;

//id="scrollMenu"