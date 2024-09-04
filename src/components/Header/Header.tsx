import { HomeOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
            <a href='#about' className="header__button">Обо мне</a>
            <a href='#projects' className="header__button">Проекты</a>
            <a href='#contacts' className="header__button">Контакты</a>
            <Link to="/qualifications" className="header__button">Курсы и сертификаты</Link>
          </>
        ) : (
          <HomeOutlined onClick={handleClick} className="header__home"/>
        )
      }
        
    </header>
  )
}

export default Header;