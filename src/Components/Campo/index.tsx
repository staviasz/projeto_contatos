import { useEffect, useState } from 'react'
import * as S from './style'

type Props = {
  textLabel: string
  textInput: string
  onChange?: (novoValor: string) => void
  type?: 'text' | 'number' | 'email'
  visible?: boolean
}

const Campo = ({
  textLabel,
  onChange,
  textInput,
  type = 'text',
  visible = true
}: Props) => {
  const [valor, setValor] = useState('')
  useEffect(() => {
    setValor(textInput)
  }, [textInput])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value
    setValor(novoValor)
    if (onChange) {
      onChange(novoValor)
    }
  }
  return (
    <S.Container visible={visible}>
      <S.Label>{textLabel}:</S.Label>
      <S.Input onChange={handleChange} value={valor} type={type} />
    </S.Container>
  )
}

export default Campo
