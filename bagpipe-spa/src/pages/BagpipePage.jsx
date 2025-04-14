// src/pages/BagpipePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Gallery from "../components/Gallery";
import bagpipeImage from "/bagpipe-spa/src/assets/images/IMG_20250409_212925_4.jpg";
import "../styles/bagpipe.scss";

const BagpipePage = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const navigate = useNavigate();

  const videoUrl =
    "https://rutube.ru/video/embed/4b19d4289bb331b507ca9554d2d166ec/";

  return (
    <div className="parchment">
      <h1>Волынка: Голос тысячелетий</h1>

      <p>
        <span className="initial">Д</span>оподлинно неизвестно, когда появились
        волынки, но согласно археологическим данным, в десятом веке до Нашей Эры
        они уже существовали. Этот необычный музыкальный инструмент, как
        полагают некоторые исследователи, появился на Ближнем Востоке и в
        средней Азии, откуда был завезён в Европу древними римлянами и
        постепенно получил повсеместное распространение. Аналоги волынки есть
        практически у многих народов от Китая до Атлантики.
      </p>

      <div
        className="bagpipe-container"
        onClick={() => setShowVideoModal(true)}
      >
        <img
          src={bagpipeImage}
          alt="Редчайшая волынка"
          className="bagpipe-img"
        />
        <p>Кликните на изображение волынки, чтобы посмотреть видео.</p>
      </div>

      <p>
        Это видео об уникальной волынке, называемой Uilleann Hummelchen
        Recorder, за основу которой взята малая германская (североевропейская)
        волынка (Hummelchen) с элементами ирландской (Uilleann pipes) (stopdrone
        key и форма мешка) с барочной (английской) аппликатурой блокфлейты,
        полная хроматика (первая октава от C плюс C,C#,D второй),
        перенастраиваемые дроны (баритон - F,G,A, бас - C,D, контрабас - G,A),
        единственный уникальный экземпляр в своём роде.
      </p>

      <Gallery title="Галерея Uilleann Hummelchen Recorder" />

      <p>
        Сделана в феврале 2016 года, мастер Sonoda T., Германия. Инструмент
        выполнен из оливкового дерева с инкрустацией из латуни и дерева умнини
        (розовая кость), мешок - коровья кожа, мехи (т.н."лягушка") - конская,
        коровья кожа, деки - агатис новозеландский, клапан - оливковое дерево.
        Трости - пластик.
      </p>

      <Modal show={showVideoModal} onClose={() => setShowVideoModal(false)}>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Видео о волынке"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default BagpipePage;
