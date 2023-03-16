import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import log from '../../assets/imgs/log.png';

import { Nav } from './styled';

export default function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('response_nav');
  };

  return (
    <Nav>
      <header>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/Sobre">Sobre</a>
          <a href="/Servicos">Serviços</a>
          <div className="log">
            <img src={log} alt="Logo" />
          </div>
          <a href="/Galeria">Galerias</a>
          <a href="/Agendamento">Agendamento</a>
          <a href="/Localizacao">Localização</a>
          <button
            type="submit"
            className="nav-btn nav-btn-close"
            onClick={showNavBar}
          >
            <FaTimes />
          </button>
        </nav>
        <div className="log2">
          <img src={log} alt="" />
        </div>
        <button type="submit" className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </Nav>
  );
}
