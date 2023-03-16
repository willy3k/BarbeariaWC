import React from 'react';

import { Container } from '../../style/GlobalStyles';
import { Homer } from './styled';
import log from '../../assets/imgs/log.png';

export default function Home() {
  return (
    <Container>
      <Homer>
        <h1>Barbearia</h1>
        <div className="logo">
          <img src={log} alt="" />
        </div>
        <div className="section-agendar">
          <div className="agenda">
            Cabelo
            <span>R$ 8.00</span>
            <a
              href="https://wa.me/5581981237767"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">agenda</button>
            </a>
          </div>
          <div className="agenda">
            Barba
            <span>R$ 5.00</span>
            <a
              href="https://wa.me/5581981237767"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">agenda</button>
            </a>
          </div>
          <div className="agenda">
            Sobranselha
            <span>R$ 5.00</span>
            <a
              href="https://wa.me/5581981237767"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">agenda</button>
            </a>
          </div>
          <div className="agenda">
            Cabelo-Barba
            <span>R$ 10.00</span>
            <a
              href="https://wa.me/5581981237767"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">agenda</button>
            </a>
          </div>
          <div className="agenda">
            Cabelo-Sobraselha
            <span>R$ 10.00</span>
            <a
              href="https://wa.me/5581981237767"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">agenda</button>
            </a>
          </div>
          <div className="agenda">
            Cabelo-Sobraselha-Barba
            <span>R$ 15.00</span>
            <a
              href="https://wa.me/5581981237767"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">agenda</button>
            </a>
          </div>
        </div>
      </Homer>
    </Container>
  );
}
