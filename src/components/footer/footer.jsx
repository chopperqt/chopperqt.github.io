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
                    <a href="vk.com/chopperxx">Chopperxx</a>
                </div>
            </footer>
        );
    }
}
 
export default Footer;