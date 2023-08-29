import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  prioridadeLink: 'danger' | 'success' | 'edit'
}
const prioridadeBg = (prioridade: string) => {
  if (prioridade === 'danger') {
    return variaveis.vermelho
  } else if (prioridade === 'success') {
    return variaveis.verde
  } else {
    return variaveis.azulEscuro
  }
}

export const LinkBotao = styled(Link)<Props>`
  padding: 8px 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => prioridadeBg(props.prioridadeLink)};
  border-radius: 4px;
  border: 2px solid #444;
  margin: 16px 8px 0 0;
  text-decoration: none;
`
