import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  body {
    font-family: 'Montserrat';
    font-size: 16px;
    line-height: 1.7;
    background-color: #DAE3E7;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  h2 {
    font-size: 1.75rem;
    margin: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  h4 {
    font-size: 1.25rem;
    margin: 0;
  }

  h5 {
    font-size: 1rem;
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
`;

export default StyledGlobal;
