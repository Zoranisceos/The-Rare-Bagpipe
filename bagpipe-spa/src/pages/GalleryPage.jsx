import React from "react";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <div className="parchment">
      <h1>Галерея музыкальных инструментов</h1>
      <p>
        В нашей галерее представлены фотографии редких и исторических
        музыкальных инструментов из разных уголков мира.
      </p>

      <Gallery />
    </div>
  );
};

export default GalleryPage;
