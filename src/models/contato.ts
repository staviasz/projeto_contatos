class Contato {
  id: number
  nomeCompleto: string
  email: string
  telefone: string
  categoria: string

  constructor(
    id: number,
    nomeCompleto: string,
    email: string,
    telefone: string,
    categoria: string
  ) {
    this.id = id
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
    this.categoria = categoria
  }
}

export default Contato
