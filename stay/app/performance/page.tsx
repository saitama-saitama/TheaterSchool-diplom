import React from "react";
import Image from "next/image";
import "/styles/performance.scss";
import { Filters } from "@/components/shared/filters";
import { SearchInput } from "@/components/shared/search-input";

export default function PerformancePage() {
  return (
    <section className="performance__container">
      <h2 className="performance__title">Наши театральные постановки</h2>
      <SearchInput></SearchInput>
      <Filters></Filters>
      <div className="performance__card-container">
        <div className="card">
          <Image className="img" src={"/img/performance1.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">После тьмы</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance2.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">1984</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance3.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Свобода</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance4.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Fahrenheit 451</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance5.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Панелька</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance6.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Курс на свет в конце тунелля</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance7.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Вечный неудачник</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance8.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Помни</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance9.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">В толпе</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance10.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Маленькие женщины</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance11.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Когда дружба <br /> становится оружеем</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance12.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Помоги мне взлететь</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance13.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Все, везде и сразу</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance14.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">The blair witch project</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance15.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">По наклонной</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance16.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Клетка ворона</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance17.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Цель оправдывает средства</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance18.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Открывая лес</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance19.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Паршивая овца</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance20.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Пути</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance21.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Салимские ведьмы</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance22.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Ошибка</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance23.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">West side story</p>
        </div>
        <div className="card">
          <Image className="img" src={"/img/performance24.jpg"} alt={"img"} width={300} height={400}></Image>
          <p className="text">Загадка старого особняка</p>
        </div>
      </div>
    </section>
  );
}