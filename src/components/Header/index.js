import React from 'react';
// import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import log from '../../assets/imgs/log.png';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <header>
        <a href="/">Home</a>
        <a href="/Sobre">Sobre</a>
        <a href="/Servicos">Serviços</a>
        <div className="log">
          <img src={log} alt="Logo" />
        </div>
        <a href="/Galeria">Galerias</a>
        <a href="/Agendamento">Agendamento</a>
        <a href="/Localizacao">Localização</a>
      </header>
    </Nav>
  );
}
