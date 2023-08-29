import { LinkBotao } from './style'

type Props = {
  href: string
  text: string
  prioridade?: 'danger' | 'success' | 'edit'
}

const BotaoAdicionar = ({ href, text, prioridade = 'edit' }: Props) => (
  <LinkBotao prioridadeLink={prioridade} to={href}>
    {text}
  </LinkBotao>
)

export default BotaoAdicionar
