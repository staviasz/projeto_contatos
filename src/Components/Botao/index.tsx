import { Botao } from './style'

type Props = {
  children: string
  onClick?: () => void
  prioridade?: 'danger' | 'success' | 'edit'
}

const BotaoComponent = ({ children, onClick, prioridade = 'edit' }: Props) => (
  <Botao prioridadeBotao={prioridade} onClick={onClick}>
    {children}
  </Botao>
)

export default BotaoComponent
