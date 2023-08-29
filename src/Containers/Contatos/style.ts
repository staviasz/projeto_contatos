import styled from 'styled-components'
import { LinkBotao } from '../../Components/LinkBotao/style'

export const Container = styled.div`
  > div {
    border: 2px solid #ccc;
    border-radius: 8px;
    max-width: 90%;
    margin: auto;
    overflow-y: auto;

    > p {
      text-align: center;
      margin: 30px auto;
    }
  }

  ${LinkBotao} {
    display: block;
    width: 150px;
    margin-left: 50px;
  }

  @media (max-width: 768px) {
    display: block;
    max-width: 100%;
  }
`
export const Title = styled.h1`
  margin: 24px;
  text-align: center;
`
