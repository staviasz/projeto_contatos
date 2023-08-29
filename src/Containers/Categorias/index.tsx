import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Campo from '../../Components/Campo'
import CategoriaCard from '../../Components/CategoriaCard'
import { RootReducer } from '../../store'
import {
  cadastrarCategoria,
  removerCategoria
} from '../../store/reducers/categorias'
import * as S from './style'

const Categorias = () => {
  const [nomeCategoria, setNomeCategoria] = useState('')
  const [visible, setVisible] = useState(false)
  const [categoriaCadastrada, setCategoriaCadastrada] = useState(false)
  const [pErro, setpErro] = useState('')

  const dispatch = useDispatch()
  const { categoria, contato } = useSelector((state: RootReducer) => state)

  const categoriasNome = categoria.itens.map((item) => item.nome)
  function mapCategorias(categoria: string[]) {
    const categoriasContadas = []
    for (const i of categoria) {
      const contador = contato.itens.reduce(
        (acc, valor) => (valor.categoria === i ? acc + 1 : acc),
        0
      )
      categoriasContadas.push({ nome: i, contador })
    }
    const total = categoriasContadas.reduce(
      (acc, item) => acc + item.contador,
      0
    )
    const index = categoriasContadas.findIndex(
      (item) => item.nome === 'todos' && item.contador === 0
    )

    if (index !== -1) {
      categoriasContadas[index].contador = total
    }

    return categoriasContadas
  }
  const categorias = mapCategorias(categoriasNome)
  const handleFormHiden = () => {
    setVisible((v) => !v)
  }
  const removerCategoriaClick = () => {
    dispatch(removerCategoria({ nome: nomeCategoria }))
    setCategoriaCadastrada(false)
    setpErro('')
    setNomeCategoria('')
    setVisible(false)
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (categoriasNome.includes(nomeCategoria)) {
      setpErro('Categoria já cadastrada. Deseja remover?')
      setCategoriaCadastrada(true)
      return
    } else if (nomeCategoria.trim().length === 0) {
      setpErro('Digite algo')
      return
    }
    dispatch(cadastrarCategoria({ nome: nomeCategoria }))
    setCategoriaCadastrada(false)
    setpErro('')
    setNomeCategoria('')
    setVisible(false)
  }

  return (
    <S.Aside>
      <h3>Categorias</h3>
      <S.ContainerCategoria>
        {categorias.map(
          (item) =>
            item.contador !== 0 && <CategoriaCard key={item.nome} {...item} />
        )}
        <S.NovaCategoria onSubmit={handleSubmit}>
          <Campo
            textLabel="Nome"
            textInput={nomeCategoria}
            onChange={setNomeCategoria}
            visible={visible}
          />
          {visible ? (
            categoriaCadastrada ? (
              <>
                <p>{pErro}</p>
                <S.Botao
                  success={false}
                  type="button"
                  onClick={removerCategoriaClick}
                >
                  Remover
                </S.Botao>
              </>
            ) : (
              <>
                <p>{pErro}</p>
                <S.Botao success type="submit">
                  Salvar
                </S.Botao>
                <S.Botao
                  success={false}
                  type="button"
                  onClick={handleFormHiden}
                >
                  Cancelar
                </S.Botao>
              </>
            )
          ) : (
            <S.Botao success type="button" onClick={handleFormHiden}>
              Nova categoria
            </S.Botao>
          )}
        </S.NovaCategoria>
      </S.ContainerCategoria>
    </S.Aside>
  )
}

export default Categorias
