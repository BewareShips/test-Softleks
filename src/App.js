import React from "react";
import Element from "./Element";
import s from "./app.module.scss";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import Carousel from "./carousel/Carousel";

function App() {
  const items = [
    {
      photo: photo1,
      title: " Поможем дедушке построить пекарню",
      text:
        "Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена ",
    },
    {
      photo: photo2,
      title: "Сбор средств для постойки школ в Индонезии",
      text:
        "Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена ",
    },
    {
      photo: photo3,
      title: "Сбор для Арифулиной Дианы",
      text:
        "Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена ",
    },
  ];
  const [activeItem, setActiveItem] = React.useState();
  const [showItem, setShowItem] = React.useState(false);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <div></div>Те кому надо помочь
        </div>
        <div 
         className={`${s.grid} ${showItem && s.showItems}`}> 
          {items.map((obj, idx) => (
            <div
              className={`${activeItem === idx ? s.grid__active : " "} ${s.grid__item} `}
              key={`${obj}__${idx}`}
              onClick={() => setActiveItem(idx)}
            >
              <Element
                image={obj.photo}
                title={obj.title}
                text={obj.text}
                active={activeItem === idx ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={s.bottom} onClick={() => setShowItem(!showItem)}>
        {!showItem && (
          <a className={s.bottom__button} href="#">
            Смотреть все проекты
          </a>
        )}
      </div>
      <div className={s.carouselWrapper}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
