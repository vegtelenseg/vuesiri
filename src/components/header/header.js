import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img src={logo} className="logo" alt="vuesiri-logo" />
                </Link>
                <div className="header-items">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/music">Music</Link>
                        </li>
                        <li>
                            <Link to="/design">Design</Link>
                        </li>
                        <li>
                            <Link to="/fashion">Fashion</Link>
                        </li>
                        <li>
                            <Link to="/media">Media</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
