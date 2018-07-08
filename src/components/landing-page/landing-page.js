import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="app">
                <p className="title">online magazine</p>
                <div className="overlay">
                    <div className="main-section">
                        <div className="intro">
                            <img src={logo} className="logo" alt="vuesiri-logo" />
                            <p className="sub-heading">Platform for creators, by creators.</p>
                        </div>
                        {this.renderButtonAndArrows('Click Here')}
                    </div>
                </div>
            </div>
        );
    }
    renderButtonAndArrows(text) {
        return (
            <Link to="/home">
                <button className="click-here" to="/home">
                    {text}
                    <div className="chevron-down-grey">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ddd"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-down"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    <div className="chevron-down-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ddd"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-down"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </button>
            </Link>
        );
    }
}
