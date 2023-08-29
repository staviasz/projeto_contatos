import { useSelector } from 'react-redux'
import ContatoCard from '../../Components/ContatoCard'
import { LinkBotao } from '../../Components/LinkBotao/style'
import { RootReducer } from '../../store'
import { Container, Title } from './style'

const Contatos = () => {
  const { categoria, contato } = useSelector((state: RootReducer) => state)
  const { ativo } = categoria

  return (
    <Container>
      <Title>Contatos</Title>
      <div>
        {contato.itens.length !== 0 ? (
          <ul>
            {contato.itens.map(
              (item) =>
                (item.categoria === ativo || ativo === 'todos') && (
                  <ContatoCard key={item.id} {...item} />
                )
            )}
          </ul>
        ) : (
          <p>Você não tem contatos, cadastre-os</p>
        )}
      </div>
      <LinkBotao prioridadeLink="success" to="cadastrar">
        Novo cadastro
      </LinkBotao>
    </Container>
  )
}

export default Contatos
