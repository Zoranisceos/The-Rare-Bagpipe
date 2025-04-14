import React from "react";
import BagpipeInfo from "../components/BagpipeInfo";

const About = () => {
  return (
    <div className="parchment">
      <h1>О проекте</h1>
      <p>
        Этот проект создан для всех любителей старинных музыкальных инструментов
        и традиционной музыки. Мы собираем информацию о редких и уникальных
        инструментах со всего мира.
      </p>
      <p>
        Наш сайт - это попытка сохранить и передать знания о музыкальных
        традициях разных народов.
      </p>

      <BagpipeInfo />
    </div>
  );
};

export default About;
