import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarCategoria } from '../../store/reducers/categorias'
import * as S from './style'

type Props = {
  nome: string
  contador: number
}

const CategoriaCard = ({ nome, contador }: Props) => {
  const dispatch = useDispatch()
  const { ativo: categoria } = useSelector(
    (state: RootReducer) => state.categoria
  )

  const verificaEstaAtivo = () => {
    const mesmoNome = categoria === nome
    return mesmoNome
  }

  const filtrarCategoria = () => {
    dispatch(alterarCategoria(nome))
  }

  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrarCategoria}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{nome}</S.Label>
    </S.Card>
  )
}

export default CategoriaCard
