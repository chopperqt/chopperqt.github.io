import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__text">
                        <div className="footer__logo"></div>
                        <div className="footer__desctiption">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                        </div>
                        <div className="footer__adress">
                            <h4>Adress</h4>
                            <p>Ilya Tsvetkov <br/> Zelenodolsk, 422540, RU</p>
                            <h4>e-mail: ilua292010@gmail.com</h4>
                            <h4><a href="tel:+79656036522">+7 (965) 603-65-22</a></h4>
                        </div>
                        <div className="footer__socials">
                            <a href="https://vk.com/chopperxx" rel="noreferrer" target="_blank"><i className="fab fa-vk"></i></a>
                            <a href="https://vk.com/chopperxx" rel="noreferrer" target="_blank"><i className="fab fa-telegram-plane"></i></a>
                            <a href="https://vk.com/chopperxx" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="footer__fields">
                        <div className="short__field">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="E-mail" />
                        </div>
                        <div className="short__field">
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Website" />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <button id="footerBtn">Submit</button>
                    </div>
                </div>
                <div className="container">
                    <span>Create by Chopper 2020</span>
                </div>
            </footer>
        );
    }
}
 
export default Footer;