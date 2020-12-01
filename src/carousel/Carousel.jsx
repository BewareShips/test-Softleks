import React from "react";
import s from "./carousel.module.scss";
import { BsChevronUp, BsChevronDown} from "react-icons/bs";

const data = [
  {
    name: "Садака",
    text:
      "Садака — добровольная милостыня, которую человек выплачивает по собственному усмотрению и желанию в неограниченном количестве.",
  },
  {
    name: "Закят",
    text:
      "один из пяти столпов ислама, обязательный ежегодный налог в исламском праве, выплачиваемый с различного вида доходов и имущества (движимого и недвижимого) всеми самостоятельными, свободными, дееспособными и взрослыми мусульманами в пользу нуждающихся единоверцев. Согласно шариату, его выплата означает, что полученные доходы и нажитое богатство не являются греховными. Точные размеры закята, как и то на какие виды собственности он распространяется, являются предметом дискуссий среди знатоков мусульманского права",
  },
  {
    name: "Фитр",
    text:
      "Милостыня Разговения - Закят аль-Фитр, была вменена с целью помочь бедным, тем, кто нуждается, избавив их таким образом от нужды обращаться с просьбой в праздничный день, а помогающим – с целью искупления допущенных ими во время поста упущений. Вменена эта Милостыня Разговения была общине Посланника Аллах",
  },
  
];

function Carousel() {
  const [current, setCurrent] = React.useState(data[0]);
  const [activeItem, setActiveItem] = React.useState(0);
  const handleSetClick = (idx)=>{
    setCurrent(data[idx])
    setActiveItem(idx)
  }
  const topButtonClick = () =>{
    if(activeItem > 0){
       setCurrent(data[activeItem - 1])
       setActiveItem(activeItem-1)
    }
  }

  const bottomButtonClick = () =>{
    if(activeItem < data.length - 1){
      setCurrent(data[activeItem + 1])
      setActiveItem(activeItem + 1)
    }
  }
  return (
    <div className={s.wrapper}>
      <div className={s.subTitle}><div></div>О пожертвованиях</div>
      <div className={s.container}>
        <div className={s.titles}>
        <BsChevronUp onClick={() => topButtonClick()} className={s.titles__sign}/>
          {data.map((item, idx) => (
            <span className={` ${activeItem === idx ? s.activeEl : s.usual}`} onClick={ () => handleSetClick(idx) } key={idx}>  
              {item.name} 
            </span>
          ))}
          <BsChevronDown onClick={() => bottomButtonClick()} className={s.titles__sign}/>
        </div>
        <div className={s.main}>
          <p>{current.text} </p>
          <a className={s.main__button} href="#">
            Расчитать закят
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
