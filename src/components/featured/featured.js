import React from 'react';

const images = [
    {
        url: require('../../assets/images/featured/nathan.jpg'),
        alt: 'nathan'
    },
    {
        url: require('../../assets/images/featured/oladimeji.jpg'),
        alt: 'oladimeji'
    },
    {
        url: require('../../assets/images/featured/tanja.jpg'),
        alt: 'tanja'
    },
    {
        url: require('../../assets/images/featured/tyler.jpg'),
        alt: 'tyler'
    }
];
export default class Featured extends React.Component {
    render() {
        return (
            <div>
                <p className="featured-heading">Featured Artists</p>
                <div className="featured">
                    {images.map((img, idx) => (
                        <div className="artist-image">
                            <img key={idx} alt={img.alt} src={img.url} className="" />
                            <div className="img-overlay" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
