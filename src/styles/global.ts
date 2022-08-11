import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-900']};
  }


  html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        } 

        @media (max-width: 720px) {
            font-size:  87.5%;
        }
    }

    body {
        background: ${(props) => props.theme.background};
      color: ${(props) => props.theme['gray-700']};
      -webkit-font-smoothing: antialiased;
      margin: 0 10rem;

        @media (max-width: 1440px) {
            margin: 0 7rem;
        } 

        @media (max-width: 720px) {
            margin: 0 4rem;
        } 

        @media (max-width: 720px) {
            margin: 0 3rem;
        } 
    }

  h1 {
      font-size: 3rem;
      font-weight: 700;
      color: ${(props) => props.theme['gray-900']};
      line-height: 130%;

  }

  p {
      line-height: 130%;
  }

  body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
  }
`
