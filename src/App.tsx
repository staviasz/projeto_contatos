import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CadastroEdicao from './pages/CadastroEdicao/intex'
import Home from './pages/Home'
import store from './store'
import GlobalStyle from './styles/GlobalStyles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastrar',
    element: <CadastroEdicao />
  },
  {
    path: '/editar/:id',
    element: <CadastroEdicao />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
