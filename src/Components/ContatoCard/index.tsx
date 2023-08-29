import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { remover } from '../../store/reducers/contatos'
import BotaoComponent from '../Botao'
import * as S from './style'

type Props = {
  id: number
  email: string
  nomeCompleto: string
  telefone: string
}

const ContatoCard = ({ id, email, nomeCompleto, telefone }: Props) => {
  const dispatch = useDispatch()
  return (
    <S.Contato>
      <div>
        <p>{nomeCompleto}</p>
        <p>{email}</p>
        <p>{telefone}</p>
      </div>
      <Link to={`/editar/${id}`}>
        <BotaoComponent>Editar</BotaoComponent>
      </Link>
      <BotaoComponent onClick={() => dispatch(remover(id))} prioridade="danger">
        Remover
      </BotaoComponent>
    </S.Contato>
  )
}

export default ContatoCard
