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
                    <ul className="socials">
                        <a href="https://vk.com/chopperxx"><i className="fab fa-vk"></i></a>
                        <a href=""><i className="fab fa-telegram-plane"></i></a>
                        <a href=""><i className="fab fa-github"></i></a>
                    </ul>
                </div>
            </footer>
        );
    }
}
 
export default Footer;