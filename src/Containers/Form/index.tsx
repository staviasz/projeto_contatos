import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import BotaoComponent from '../../Components/Botao'
import Campo from '../../Components/Campo'
import { RootReducer } from '../../store'
import { cadastrar, editar } from '../../store/reducers/contatos'
import * as S from './style'

const Form = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  const itensCategoria = useSelector(
    (state: RootReducer) => state.categoria.itens
  )
  const itensContato = useSelector((state: RootReducer) => state.contato.itens)
  const itemContato = itensContato.find((i) => i.id === Number(id))

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [categoriaId, setCategoriaId] = useState(0)
  const [categoria, setCategoria] = useState('')

  const [nomeErro, setNomeErro] = useState('')
  const [emailErro, setEmailErro] = useState('')
  const [telErro, setTelErro] = useState('')

  useEffect(() => {
    if (itemContato) {
      setNomeCompleto(itemContato.nomeCompleto)
      setEmail(itemContato.email)
      setTelefone(itemContato.telefone)
      const idCategoriaInicial = itensCategoria.find(
        (i) => i.nome === itemContato.categoria
      )
      if (idCategoriaInicial) setCategoriaId(idCategoriaInicial?.id)
      setCategoria(itemContato.categoria)
    }
  }, [itemContato, itensCategoria])

  const validacaoDeDados = (
    nomeCompleto: string,
    email: string,
    telefone: string
  ) => {
    console.log('nom', nomeCompleto)
    if (nomeCompleto) {
      const nomeSobrenome = nomeCompleto.split(' ').length >= 2
      if (!nomeSobrenome) {
        setNomeErro('Digite nome e sobrenome')
        return
      }
    } else {
      setNomeErro('Campo obrigatorio')
      return
    }
    setNomeErro('')

    if (email) {
      const padraoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if (!padraoEmail.test(email)) {
        setEmailErro('Digite um email valido')
        return
      }
    } else {
      setEmailErro('Digite um email')
      return
    }
    setEmailErro('')

    if (telefone) {
      console.log('tele', telefone)

      const numeroLimpo = telefone.replace(/\D/g, '')
      console.log('num', numeroLimpo)

      const comprimentoEsperado = [10, 11]
      if (!comprimentoEsperado.includes(numeroLimpo.length)) {
        setTelErro('Numero invalido')
        return
      }
    } else {
      setTelErro('Campo obrigatorio')
      return
    }
    return true
  }

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategoriaId = e.target.value
    const newCategoria = itensCategoria.find(
      (i) => i.id === parseInt(newCategoriaId)
    )
    setCategoriaId(parseInt(newCategoriaId))
    if (newCategoria) setCategoria(newCategoria.nome)
  }

  const cadastrarContato = (evento: React.FormEvent) => {
    evento.preventDefault()
    const valido = validacaoDeDados(nomeCompleto, email, telefone)
    if (location.pathname === '/cadastrar') {
      if (valido) {
        console.log(valido)
        dispatch(cadastrar({ nomeCompleto, email, telefone, categoria }))
        navigate('/')
      }
    } else {
      const ID = Number(id)
      dispatch(editar({ id: ID, nomeCompleto, email, telefone, categoria }))
      navigate('/')
    }
  }

  return (
    <S.Container onSubmit={cadastrarContato}>
      {location.pathname === '/cadastrar' ? (
        <h3>Cadastrar contato</h3>
      ) : (
        <h3>Editar contato</h3>
      )}
      <h3></h3>
      <Campo
        textLabel="Nome completo"
        onChange={setNomeCompleto}
        textInput={nomeCompleto}
      />
      <S.PErro>{nomeErro}</S.PErro>
      <Campo
        textLabel="E-mail"
        onChange={setEmail}
        textInput={email}
        type="email"
      />
      <S.PErro>{emailErro}</S.PErro>
      <Campo textLabel="Telefone" onChange={setTelefone} textInput={telefone} />
      <S.PErro>{telErro}</S.PErro>

      <S.Select value={categoriaId} onChange={handleCategoriaChange}>
        {itensCategoria.map(
          (item) =>
            item.nome !== 'todos' && (
              <option selected key={item.id} value={item.id}>
                {item.nome}
              </option>
            )
        )}
      </S.Select>
      <S.Botao type="submit">Salvar</S.Botao>
      <Link to="/">
        <BotaoComponent prioridade="danger">Cancelar</BotaoComponent>
      </Link>
    </S.Container>
  )
}

export default Form
