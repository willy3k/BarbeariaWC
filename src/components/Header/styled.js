import styled from 'styled-components';
// import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  header .nav-btn {
    background: transparent;
    outline: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
  }

  .log {
    border: 1px solid black;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: black;
  }
  .log2 {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: transparent;
    border: none;
    outline: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
  }
  a {
    display: flex;
    margin: 0 20px;
    color: #fff;
    font-weight: bold;

    position: relative;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  a:focus:after,
  a:hover:after {
    width: 100%;
    left: 0%;
  }
  a:after {
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

  @media (max-width: 900px) {
    header .nav-btn {
      visibility: visible;
      opacity: 1;
      position: relative;
    }

    .log2 {
      visibility: visible;
      opacity: 1;
      position: relative;
    }
    header nav {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: black;
      justify-content: center;
      gap: 1.5rem;
      background: ;
      transition: 1s;
      transform: translateY(-100vh);
    }
    header {
    }
    header .response_nav {
      transform: none;
    }

    nav .nav-btn-close {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;
