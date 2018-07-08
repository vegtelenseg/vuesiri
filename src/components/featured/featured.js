import React from 'react';

const images = [
    {
        url: require('../../assets/images/featured/nathan.jpg'),
        alt: 'Nathan',
        occupation: 'Kinetic Typographer'
    },
    {
        url: require('../../assets/images/featured/oladimeji.jpg'),
        alt: 'Oladimeji',
        occupation: 'Web Designer'
    },
    {
        url: require('../../assets/images/featured/tanja.jpg'),
        alt: 'Tanja',
        occupation: 'Sound Engineer'
    },
    {
        url: require('../../assets/images/featured/tyler.jpg'),
        alt: 'Tyler',
        occupation: 'Music Composer'
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
                            <div className="about-artist">
                                <p className="name">{img.alt}</p>
                                <p className="occupation">{img.occupation}</p>
                            </div>
                            <div className="img-overlay" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
