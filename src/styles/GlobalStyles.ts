import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const MainContainer = styled.div`
  margin: 50px auto;
  width: 800px;
  @media (max-width: 768px) {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyle
