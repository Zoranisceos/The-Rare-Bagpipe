import React from "react";
import BagpipeInfo from "../components/BagpipeInfo";

const About = () => {
  return (
    <div className="parchment">
      <h1>О проекте</h1>
      <p>
        Этот проект создан для всех любителей старинных музыкальных инструментов
        и традиционной музыки. Здесь собрана информация о редкой и уникальной
        волынке.
      </p>
      <p>
        Данный сайт - это попытка сохранить и передать знания о музыкальных
        традициях разных народов, переплетающихся в этом инструменте.
      </p>

      <BagpipeInfo />
    </div>
  );
};

export default About;
