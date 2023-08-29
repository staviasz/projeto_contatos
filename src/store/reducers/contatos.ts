import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomeCompleto.toLowerCase() ===
          action.payload.nomeCompleto.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Contato já cadastro')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      console.log(action.payload)

      const indexDaContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaContato >= 0) {
        state.itens[indexDaContato] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    }
  }
})

export const { cadastrar, editar, remover } = contatosSlice.actions
export default contatosSlice.reducer
