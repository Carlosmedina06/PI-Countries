import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
    background-color: #ffffff
  }

a {
  color: #000000;
  text-decoration: none;
}

body > iframe {
  pointer-events: none;
}
`

export default GlobalStyle
