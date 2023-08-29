import { configureStore } from '@reduxjs/toolkit'
import categoriaRedecer from './reducers/categorias'
import contatosReducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    contato: contatosReducer,
    categoria: categoriaRedecer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
