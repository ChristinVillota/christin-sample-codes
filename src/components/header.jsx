import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <ul className="nav">
                    <li><a href="#home"></a></li>
                    <li><a href="#about"></a></li>
                    <li><a href="#clients"></a></li>  
                    <li><a href="#contact"></a></li>
                    <li>{this.props.date}</li>
                </ul>
            </div>
        );
    }
}

class Header2 extends Component {
    render() {
        return (
            <div className='header2'>
                <h1>HEADER2!!!</h1>
            </div>
        );
    }
}

export default Header;
export {Header, Header2};