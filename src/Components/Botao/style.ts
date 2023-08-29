import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  prioridadeBotao: 'danger' | 'success' | 'edit'
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

export const Botao = styled.button<Props>`
  padding: 8px 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => prioridadeBg(props.prioridadeBotao)};
  border-radius: 4px;
  margin: 16px 8px 0 0;
`
