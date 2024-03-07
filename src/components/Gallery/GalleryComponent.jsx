// Gallery.js
import React, { useState } from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './galleryComponent.scss'; // Your custom styles
import img1 from '../../assets/img/mpcl/bigData.jpg';
import img2 from '../../assets/img/mpcl/bigData.jpg';
import img3 from '../../assets/img/mpcl/bigData.jpg';
import img4 from '../../assets/img/mpcl/bigData.jpg';

const images = [
    {
        original: img1,
        description: 'Image 1',
    },
    {
        original: img2,
        description: 'Image 2',
    },
    {
        original: img3,
        description: 'Image 3',
    },
    {
        original: img4,
        description: 'Image 4',
    },
    {
        original: img1,
        description: 'Image 1',
    },
    {
        original: img2,
        description: 'Image 2',
    },
    {
        original: img3,
        description: 'Image 3',
    },
    {
        original: img4,
        description: 'Image 4',
    }, {
        original: img1,
        description: 'Image 1',
    },
    {
        original: img2,
        description: 'Image 2',
    },
    {
        original: img3,
        description: 'Image 3',
    },
    {
        original: img4,
        description: 'Image 4',
    },
    // Add more images as needed
];

const GalleryComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

    const handleClose = () => {
        setCurrentIndex(null);
    };

    return (
        <div>
             <div className='galleryTitle'>
             <h1>Company Gallery</h1>
                </div>
            <div className="gallery">
               
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="image"
                        onClick={() => handleImageClick(index)}
                    >
                        <img src={image.original} alt={`Company Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            {currentIndex !== null && (
                <Gallery
                    items={images}
                    currentIndex={currentIndex}
                    onRequestClose={handleClose}
                />
            )}
        </div>
    );
};

export default GalleryComponent;
