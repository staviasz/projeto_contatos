import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CategoriaState = {
  itens: { id: number; nome: string }[]
  ativo: string
}

const initialState: CategoriaState = {
  itens: [
    { id: 1, nome: 'trabalho' },
    { id: 2, nome: 'familia' },
    { id: 3, nome: 'amigos' },
    { id: 4, nome: 'todos' }
  ],
  ativo: 'todos'
}

const categoriaSlice = createSlice({
  name: 'categoria',
  initialState,
  reducers: {
    alterarCategoria: (state, action: PayloadAction<string>) => {
      state.ativo = action.payload
    },
    cadastrarCategoria: (state, action: PayloadAction<{ nome: string }>) => {
      const ultimoValor = state.itens.slice(-1)[0]
      state.itens.push({ id: ultimoValor.id + 1, nome: action.payload.nome })
      alert(
        `categoria add: ${action.payload.nome}\nAtribua a um contato para exibi-la`
      )
    },
    removerCategoria: (state, action: PayloadAction<{ nome: string }>) => {
      const newState = state.itens.filter((i) => i.nome !== action.payload.nome)
      state.itens = []
      state.itens.push(...newState)
      console.log(...newState)
      alert(`Categoria ${action.payload.nome} removida`)
    }
  }
})

export const { alterarCategoria, cadastrarCategoria, removerCategoria } =
  categoriaSlice.actions
export default categoriaSlice.reducer
