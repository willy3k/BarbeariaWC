import styled from 'styled-components';

export const Homer = styled.section`
  /* padding: 30px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    /* Primeiro passo: definir um degradê como fundo */
    background-image: linear-gradient(to top, black, red);

    /* Segundo passo: apagar do fundo tudo que não estiver imediatamente atrás de texto */
    background-clip: text;
    -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */

    /* Terceiro passo: apagar o texto, deixando apenas o fundo atrás dele */
    -webkit-text-fill-color: transparent;

    /* Cor que contraste com o degradê, caso o navegador não suporte  text */
    color: black;
    text-align: center;

    position: relative;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  h1:focus:after,
  h1:hover:after {
    width: 100%;
    left: 0%;
  }
  h1:after {
    content: '';
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: red;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  .logo {
    border-bottom: 3px solid red;
    width: 400px;
    height: 400px;
    border-radius: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }

  // Section agendar
  .section-agendar {
    margin-top: 50px;
    width: 1000px;
    background: #07182e;
    position: relative;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
  }
  .section-agendar::before {
    content: '';
    position: absolute;
    width: 200px;
    background: red;
    height: 530%;
    animation: rotBGimg 4s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  .section-agendar::after {
    content: '';
    position: absolute;
    background: #07182e;
    inset: 2px;
    border-radius: 15px;
  }

  // agenda
  .agenda {
    margin: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    z-index: 1;
    width: 90%;
    height: 50px;
    background: black;
    border-radius: 5px;
  }
  span {
    text-align: center;
  }

  @media (max-width: 970px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .section-agendar {
      width: 95%;
    }
  }
`;
