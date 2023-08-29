import Categorias from '../../Containers/Categorias'
import Contatos from '../../Containers/Contatos'
import { Container, MainContainer } from '../../styles/GlobalStyles'

const Home = () => (
  <Container>
    <Categorias />
    <MainContainer>
      <Contatos />
    </MainContainer>
  </Container>
)

export default Home
