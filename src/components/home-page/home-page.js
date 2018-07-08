import React from 'react';
import Header from '../header/header';
import Featured from '../featured/featured';
import Carousel from '../carousel/carousel';
import Subscribe from '../subscribe/subscribe';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="header-section">
                    <Header />
                </div>
                <div className="carousel-section">
                    <Carousel />
                </div>
                <div className="featured-section">
                    <Featured />
                </div>
                <div className="subscribe-section">
                    <Subscribe />
                </div>
            </div>
        );
    }
}
