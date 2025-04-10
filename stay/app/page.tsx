import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import "/styles/main.scss"

export default function Home() {
  return (
    <>

      <section className="about__container" id="about">
        <div className="about__left-container">
          <h2 className="about__title">О нас</h2>
          <p className="about__left-page">Добро пожаловать в нашу школу театрального искусства! Мы — творческое сообщество, объединяющее людей, стремящихся развивать свои актерские способности и погружаться в удивительный мир театра. Наша миссия — вдохновить и подготовить новое поколение артистов, способных выразить свои мысли и чувства на сцене.</p>
          <p className="about__left-page">В нашей школе мы предлагаем разнообразные курсы для всех уровней — от начинающих до опытных актеров. Наши преподаватели — профессионалы с богатым опытом работы в театре и кино, которые помогут вам раскрыть свой потенциал, освоить техники актерского мастерства и научиться взаимодействовать с партнерами на сцене.</p>
          <p className="about__left-page">Мы верим, что театр — это не только искусство, но и мощный инструмент самовыражения и личностного роста. Здесь вы сможете не только развить свои актерские навыки, но и найти новых друзей, научиться работать в команде и преодолевать собственные страхи.</p>
          <p className="about__left-page">Присоединяйтесь к нам и откройте для себя мир театра!</p>
        </div>
        <div className="about__right-container">
          <div className="about__img-container">
            <Image className="about__img" src={"/img/about.jpg"} alt={"img"} width={722} height={450}></Image>
          </div>
          <div className="about__right-page-container">
            <p className="about__right-page">"Театр — это зеркало, в котором мы видим отражение самих себя." — Константин Станиславский</p>
          </div>
        </div>
      </section>

      <section className="course__container" id="course">
        <h2 className="course__title">Наши курсы</h2>
        <div className="course__card-container">
          <Link href={"/course"}>
            <div className="card">
              <Image className="img" src={"/img/course1.jpg"} alt={"img"} width={300} height={400}></Image>
              <p className="text">Нерассказанные истории</p>
            </div>
          </Link>
          <div className="card">
            <Image className="img" src={"/img/course2.jpg"} alt={"img"} width={300} height={400}></Image>
            <p className="text">Сквозь маску</p>
          </div>
          <div className="card">
            <Image className="img" src={"/img/course3.jpg"} alt={"img"} width={300} height={400}></Image>
            <p className="text">Падение в тишину</p>
          </div>
          <div className="card">
            <Image className="img" src={"/img/course4.jpg"} alt={"img"} width={300} height={400}></Image>
            <p className="text">Театр - дело вкуса</p>
          </div>
          <div className="card">
            <Image className="img" src={"/img/course5.jpg"} alt={"img"} width={300} height={400}></Image>
            <p className="text">Суть человека</p>
          </div>
          <div className="card">
            <Image className="img" src={"/img/course6.jpg"} alt={"img"} width={300} height={400}></Image>
            <p className="text">Речь и эмоции</p>
          </div>
          <div className="card">
            <Image className="img" src={"/img/course7.jpg"} alt={"img"} width={300} height={400}></Image>
            <p className="text">Свет и тень танца</p>
          </div>
          <div className="card">
            <Image className="img" src={"/img/course8.jpg"} alt={"img"} width={300} height={400}></Image>
            <p className="text">Искусство выражения</p>
          </div>
        </div>
      </section>

      <section className="performance__container" id="performance">
        <h2 className="performance__title">Наши театральные постановки</h2>
        <div className="performance__content-container">
          <div className="performance__page-container">
            <p className="performance__page">В нашем театре представлены разнообразные постановки, которые способны тронуть сердце и оставить незабываемые впечатления. Каждая наша работа — это результат совместного труда талантливых актеров, режиссеров и сценаристов, которые стремятся создать уникальные театральные переживания.</p>
            <p className="performance__page">Мы предлагаем вам окунуться в захватывающий мир, который охватывает широкий спектр жанров: от классических произведений до современных драм. Наш репертуар включает как известные шедевры мировой драматургии, так и оригинальные спектакли, созданные специально для нашей сцены.</p>
            <p className="performance__page page">Каждая постановка — это возможность увидеть мир с новой стороны, испытать глубокие эмоции и задуматься о важных вопросах жизни. Следите за нашим расписанием и не упустите шанс увидеть лучшие театральные работы!!</p>
          </div>
          <div className="performance__img-container">
            <div className="performance__left-img">
              <Image className="performance__img" src="/img/performance-1.jpg" alt="img" width={296} height={222}></Image>
              <Image src="/img/performance-2.jpg" alt="img" width={296} height={222}></Image>
            </div>
            <Image src="/img/performance-3.jpg" alt="img" width={345} height={464}></Image>
          </div>
        </div>
        <Link href="/performance" className="grid place-items-center">
        <Button className="performance__btn">Узнать больше</Button>
        </Link>
      </section>

      <section className="contact__container" id="contact">
        <h2 className="contact__title">Наши контакты</h2>
        <div className="contact__card-container">
          <div className="contact__img-container">
          <Image className="contact__img" src={"/img/contact.jpg"} alt={"img"} width={768} height={626}></Image>
          </div>
          <div className="contact__center-container">
            <div className="contact__upper-container">
              <p className="contact__main-text">Наш адрес</p>
              <p className="contact__text">г. Минск, ул. Кальварийская 6А</p>
              <p className="contact__text">по будням с 10:00 - 21:00</p>
              <p className="contact__text">по выходным с 12:00 - 16:00</p>
            </div>
            <div className="contact__lower-container">
              <p className="contact__main-text">Свяжитесь с нами</p>
              <p className="contact__text">+375 25 635 81 90 </p>
              <p className="contact__text">staytheatre@gmail.com</p>
            </div>
          </div>
          <div className="contact__right-container">
            <p className="contact__right-text">Наши соц. сети</p>
            <div className="contact__icon-container">
              <Image className="contact__icon" src={"/icon/telegram.svg"} alt={"telegram"} width={100} height={100}></Image>
              <Image className="contact__icon" src={"/icon/instagram.svg"} alt={"instagram"} width={100} height={100}></Image>
              <Image className="contact__icon" src={"/icon/youtube.svg"} alt={"youtube"} width={100} height={100}></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
