const Hero: React.FC= () => {
  return (
    <section className='hero'>
        <div className='hero__container'>
            <h1 className='hero__title'>Мария Лапшина</h1>
            <h2 className='hero__subtitle'>Frontend Веб-разработчик</h2>
        </div>
        <span className="hero__dash hero__dash_a" />
        <span className="hero__dash hero__dash_b" />
        <span className="hero__dash hero__dash_c" />
        <span className="hero__dash hero__dash_d" />
        <span className="hero__dash hero__dash_e" />
        <span className="hero__dash hero__dash_f" />
        <span className="hero__dash hero__dash_g" />
        <span className="hero__dash hero__dash_h" />
        <button className='hero__button'><a href='#projects' className='hero__link' >Посмотреть работы</a></button>
    </section>
  )
}

export default Hero;