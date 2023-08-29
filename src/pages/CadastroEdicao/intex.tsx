import Categorias from '../../Containers/Categorias'
import Form from '../../Containers/Form'
import { Container, MainContainer } from '../../styles/GlobalStyles'

const CadastroEdicao = () => (
  <Container>
    <Categorias />
    <MainContainer>
      <Form />
    </MainContainer>
  </Container>
)

export default CadastroEdicao
