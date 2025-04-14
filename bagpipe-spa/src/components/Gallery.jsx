// src/components/Gallery.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import { images } from "../assets/images/galleryImages";

const Gallery = ({ title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const openImage = (index) => {
    setCurrentImageIndex(index);
    setShowGalleryModal(true);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="gallery">
      {title && <div className="gallery-title">{title}</div>}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openImage(index)}
          >
            <img src={image.src} alt={image.alt} className="gallery-img" />
          </div>
        ))}
      </div>

      <Modal show={showGalleryModal} onClose={() => setShowGalleryModal(false)}>
        <div className="image-container">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          />
        </div>
        <button className="gallery-nav prev" onClick={showPrevImage}>
          &#10094;
        </button>
        <button className="gallery-nav next" onClick={showNextImage}>
          &#10095;
        </button>
      </Modal>
    </div>
  );
};

export default Gallery;
