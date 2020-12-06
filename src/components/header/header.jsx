import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

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
                <div className="container__max header__menu">
                    <div className="container">
                        <div className="header__logo"></div>
                        <ul className="header__menu__nav">
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='/about'>Обо мне</Link></li>
                            <li><Link to='/contact'>Контакты</Link></li>
                        </ul>
                        <div className="header__socials">
                            <a href="https://vk.com/chopperxx" rel="noreferrer" target="_blank"><i className="fab fa-vk"></i></a>
                            <a href="https://vk.com/chopperxx" rel="noreferrer" target="_blank"><i className="fab fa-telegram-plane"></i></a>
                            <a href="https://github.com/chopperqt" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container__max header__menu" id="scrollMenu">
                    <div className="container">
                        <div className="header__logo"></div>
                        <ul className="header__menu__nav">
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='/about'>Обо мне</Link></li>
                            <li><Link to='/contact'>Контакты</Link></li>
                        </ul>
                        <div className="header__socials">
                            <a href="https://vk.com/chopperxx" rel="noreferrer" target="_blank"><i className="fab fa-vk"></i></a>
                            <a href="https://vk.com/chopperxx" rel="noreferrer" target="_blank"><i className="fab fa-telegram-plane"></i></a>
                            <a href="https://github.com/chopperqt" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container__max header__preview">
                    <div className="container">
                        <div className="header__title">
                            <h1>Цветков Илья</h1>
                            <img src={line} alt="line"/>
                            <h5>Fronted developer</h5>
                        </div>
                    </div>
                </div>

            </header>
         );
    }
}
 
export default Header;

//id="scrollMenu"