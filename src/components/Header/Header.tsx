function Header() {
  return (
    <header className="header">
        <button className="header__button"><a href='#about' className="header__link">Обо мне</a></button>
        <button className="header__button"><a href='#projects' className="header__link">Проекты</a></button>
        <button className="header__button"><a href='#contacts' className="header__link">Контакты</a></button>
    </header>
  )
}

export default Header;