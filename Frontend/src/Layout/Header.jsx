import { useState } from 'react';
import './style/Header.css'
import Found from "../Layout/assets/search.svg";
import Like from "../Layout/assets/image 6.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header_container">
      <div className="burger_menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`burger_line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger_line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger_line ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`link_container ${menuOpen ? 'active' : ''}`}>
        <a className="link_header" href="">Главная</a>
        <a className="link_header" href="">Каталог</a>
        <a className="link_header" href="">Профиль</a>
      </div>

      <div className='search_like_container'>
        <div className='search_container'>
          <input
            className='search_form'
            type="text"
            placeholder="Найти мероприятие"
          />
          <img 
            src={Found} 
            className='search_icon'
            alt="Поиск"
          />
        </div>
        <img 
          src={Like}
          alt="Лайк"
          className='like_img'
        />
      </div>
    </header>
  );
}
export default Header;