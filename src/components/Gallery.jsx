import React from "react";

const Gallery = () => {
    // Use public paths for the photos
    const photos = [
        { id: 1, src: "/assets/dk.jpg", alt: "Head Photo" },
        { id: 2, src: "/assets/me.jpg", alt: "Me Photo" },
        { id: 3, src: "/assets/lula.jpg", alt: "Photo 3" },
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