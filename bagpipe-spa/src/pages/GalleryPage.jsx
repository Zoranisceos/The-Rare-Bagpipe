import React from "react";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <div className="parchment">
      <h1>Галерея Uilleann Hummelchen Recorder</h1>
      <p>
        В данной галерее представлены фотографии редчайшей самобытной волынки.
      </p>

      <Gallery />
    </div>
  );
};

export default GalleryPage;
