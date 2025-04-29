import React from "react";
import headImage from "../assets/head.jpg"; // Import the image
import meImage from "../assets/me.jpg"; // Import another image
import photo3Image from "../assets/lula.jpg"; // Import a third image

const Gallery = () => {
    // Use imported images in the photos array
    const photos = [
        { id: 1, src: headImage, alt: "Head Photo" },
        { id: 2, src: meImage, alt: "Me Photo" },
        { id: 3, src: photo3Image, alt: "Photo 3" },
    ];

    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                {photos.map(photo => (
                    <div key={photo.id} className="gallery-item">
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;