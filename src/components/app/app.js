import React from 'react';
import logo from '../../assets/images/logo.png';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <p className="title">online magazine</p>
                <div className="overlay" />
                <div className="main-section">
                    <div className="intro">
                        <img src={logo} className="logo" />
                        <p className="sub-heading">Platform for creators, by creators</p>
                    </div>
                    <button className="click-here">Click Here</button>
                </div>
            </div>
        );
    }
}

export default App;
