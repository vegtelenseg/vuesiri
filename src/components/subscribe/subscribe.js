import React from 'react';
import { Link } from 'react-router-dom';
import subBanner from '../../assets/images/subscribe/subscribe.jpg';
import iPhone from '../../assets/images/subscribe/iPhone.png';
export default class Subscribe extends React.Component {
    render() {
        return (
            <div className="subscribe">
                <img src={subBanner}   alt="vuesiri-banner"/>
                <div className="iPhone-container">
                    <img className="iPhone" src={iPhone} alt="vuesiri-iphone"/>
                </div>
                <div className="log-in-sign-up">
                    <Link to="sign-in">login</Link>
                    <Link to="sign-up">Sign Up</Link>
                </div>
            </div>
        );
    }
}
