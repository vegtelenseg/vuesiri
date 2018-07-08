import React from 'react';
import logo from '../../assets/images/logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="logo" alt="vuesiri-logo" />
                <div className="header-items">
                    <ul>
                        <li>Home</li>
                        <li>Music</li>
                        <li>Design</li>
                        <li>Fashion</li>
                        <li>Media</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        );
    }
}
