import styled from 'styled-components';
// import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  /* padding: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .log {
    border: 1px solid black;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: black;
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
`;
