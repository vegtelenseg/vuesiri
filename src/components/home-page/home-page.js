import React from 'react';
import Slider from 'react-slick';
import Header from '../header/header';
import pic1 from '../../assets/images/carousel/frankie-min.jpg';
import pic2 from '../../assets/images/carousel/alex-holyoake-min.jpg';
import pic3 from '../../assets/images/carousel/smoke-min.jpg';
import pic4 from '../../assets/images/carousel/jay-wennington-min.jpg';

export default class HomePage extends React.Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <div className="header-section">
                    <Header />
                </div>
                <div className="carousel-section">
                    <Slider {...settings}>
                        <div>
                            <img src={pic1} className="carousel-item" alt="vuesiri-carousel" />
                        </div>
                        <div>
                            <img src={pic2} className="carousel-item" alt="vuesiri-carousel" />
                        </div>
                        <div>
                            <img src={pic3} className="carousel-item" alt="vuesiri-carousel" />
                        </div>
                        <div>
                            <img src={pic4} className="carousel-item" alt="vuesiri-carousel" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}
