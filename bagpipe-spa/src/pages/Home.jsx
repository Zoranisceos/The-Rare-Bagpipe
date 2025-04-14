import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="parchment">
      <h1>Добро пожаловать в мир старинных инструментов</h1>
      <p>
        Наш сайт посвящен истории и современности музыкальных инструментов,
        которые веками сопровождали человечество.
      </p>
      <p>
        Особое внимание мы уделяем <Link to="/bagpipe">волынке</Link> -
        удивительному инструменту с богатой историей.
      </p>
      <p>
        Посетите нашу <Link to="/gallery">галерею</Link>, чтобы увидеть
        уникальные экспонаты.
      </p>
    </div>
  );
};

export default Home;
