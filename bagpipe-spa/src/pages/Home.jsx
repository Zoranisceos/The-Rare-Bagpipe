import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="parchment">
      <h1>Добро пожаловать в мир волынок!</h1>
      <p>
        Этот сайт посвящен истории и современности музыкальных инструментов,
        которые веками сопровождали человечество.
      </p>
      <p>
        Особое внимание мы уделяем <Link to="/bagpipe">волынке</Link> -
        удивительному инструменту с богатой историей.
      </p>
      <p>
        Посетите <Link to="/gallery">галерею</Link> на сайте, чтобы увидеть
        уникальный экспонат.
      </p>
    </div>
  );
};

export default Home;
