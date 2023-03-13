import React from 'react';
// import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <header>
        <a href="/">Home</a>
        <a href="/Sobre">Sobre</a>
        <a href="/Servicos">Serviços</a>
        <img src="" alt="Logo" />
        <a href="/Galeria">Galerias</a>
        <a href="/Agendamento">Agendamento</a>
        <a href="/Localizacao">Localização</a>
      </header>
    </Nav>
  );
}
