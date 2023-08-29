import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  success: boolean
}

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
    height: 50vh;
    display: inline-block;
    margin-bottom: 30px;
  }

  h3 {
    text-align: center;
    margin-bottom: 16px;
  }
`
export const ContainerCategoria = styled.div`
  display: block;
  max-width: 500px;
  display: block;
  margin: auto;
  text-align: center;
`
export const NovaCategoria = styled.form`
  > p {
    margin-top: -14px;
    font-size: 10px;
    color: ${variaveis.vermelho};
  }
`

export const Botao = styled.button<Props>`
  padding: 8px 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) =>
    props.success ? variaveis.verde : variaveis.vermelho};
  border-radius: 4px;
  margin-right: 8px;
`
