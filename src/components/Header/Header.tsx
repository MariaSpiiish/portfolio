import { HomeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  const headerClassName = (location.pathname === '/') ? 'header header_home' : 'header header_qual';

  return (
    <header className={headerClassName}>
      {
        (location.pathname === '/') ? (
          <>
            <button className="header__button"><a href='#about' className="header__link">Обо мне</a></button>
            <button className="header__button"><a href='#projects' className="header__link">Проекты</a></button>
            <button className="header__button"><a href='#contacts' className="header__link">Контакты</a></button>
          </>
        ) : (
          <HomeOutlined onClick={handleClick} className="header__home"/>
        )
      }
        
    </header>
  )
}

export default Header;