import React from "react";
import circle from "../assets/circle.png";
import s from "./elements.module.scss";
import hand from "../assets/hand.png";

function Element({ image, title, text, active }) {
  return (
    <div className={s.el}>
      <img className={s.el__photo} src={image} alt="grandfather" />
      <div className={s.el__title}>{title}</div>
      <div className={s.el__text}>
        {text}
      </div>
      <div className={s.aids}>
        <img src={circle} alt="circle" />
        <div className={s.amount}>
          <div className={s.upper}>необходимо собрать</div>
          <div className={s.lower}>
            <span>45194</span> из 1 000 000 RUB
          </div>
        </div>
        <div >
          <div className={s.upper}>конец</div>
          <div className={s.lower}>завтра</div>
        </div>
      </div>

      <div className={s.hintsWrapper}>
        <div className={s.hints}>
          <div>помощь нуждающимся</div>
          <div>закят</div>
        </div>
        {active && (
          <a className={s.button} href="#">
            <img src={hand} alt="handbutton" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Element;
