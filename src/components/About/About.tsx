import { useState, useEffect } from "react";
import { about, stack } from '../../utils/constants';
import { Link } from "react-router-dom";

function About() {
  
  const selfie: string = new URL(`../../assets/selfie.jpg`, import.meta.url).href;
  const goat: string = new URL(`../../assets/goat.jpg`, import.meta.url).href;
  const runner: string = new URL(`../../assets/run.jpg`, import.meta.url).href;
  const explorer: string = new URL(`../../assets/explore.jpg`, import.meta.url).href;
  const images: string[] = [selfie, runner, explorer, goat];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timer: number;

    if (hovering) {
      let index = 0;
      const changeImage = () => {
        index += 1;
        if (index < images.length) {
          setCurrentImage(images[index]);
          timer = setTimeout(changeImage, 500); // Change image every 1 second
        } else {
          setCurrentImage(images[0]); // Reset to the initial image
        }
      };
      timer = setTimeout(changeImage, 200); // Start the sequence
    }
    return () => clearTimeout(timer); // Cleanup timeout on hover end or unmount
  }, [hovering]);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setCurrentImage(images[0]); // Reset to the initial image
  };

  return (
    <section className="about" id="about">
      <h2 className="section-title">Обо мне</h2>
      <div className="about__content">
        <div className="about__circle">
          <div className="about__img-wrapper">
              <img src={currentImage} alt="meet mariia" className="about__img" style={{marginTop: '-90px'}}onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>
          </div>
          <div className="about__text-cont">
              <p className="about__text">{about.split('').map((char, i) => (
                  <span key={i} style={{transform: `rotate(${i * 6}deg)`}}>{char}</span>
              ))}</p>
          </div>
        </div>

        <div className="about__stack">
          <h3 className="about__title">Стек</h3>
          <div className="about__stack-container">
            <ul className="about__stack-list">
              {stack.frontend.map((item, i) => <li key={i} className="about__stack-list-item">{item}</li>)}
            </ul>
            <ul className="about__stack-list">
              {stack.backend.map((item, i) => <li key={i} className="about__stack-list-item">{item}</li>)}
            </ul>
            <ul className="about__stack-list">
              {stack.techs.map((item, i) => <li key={i} className="about__stack-list-item">{item}</li>)}
            </ul>
          </div>
          <button className="about__stack-button">
            <Link to="/qualifications" className="about__stack-link">Курсы и сертификаты</Link>
          </button>
          
        </div>
        
        <div className="about__exp">
          <h3 className="about__title">Опыт</h3>
          <p className="about__exp-text">Филолог по образованию и повелитель нулей и единиц в душе, в 2022 году я окончила курсы ЯндексПрактикум по направлению веб-разработки. В 2024 окончила курс CS50 от Harward University на ed.x.</p>
          <p className="about__exp-text">Проходила практику в "Фастдев" на протяжении полугода в начале 2023, где с DevOps командой разработала фронтенд часть SPA на React для HR компании, которое представляет собой таблицу сводных данных о занятости сотрудников компании с возможностью фильтрации и поиска.</p>
          <p className="about__exp-text">На данный момент являюсь стажером в NjuiceAB, занимаюсь поддержкой фронтенд части внутреннего приложения и разработкой нового функционала.
          </p>
        </div>
      </div>
    </section>
    
  )
}

export default About;