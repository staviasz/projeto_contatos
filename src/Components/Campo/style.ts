import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  visible: boolean
}

export const Container = styled.div<Props>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  margin: 16px 0;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 3px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 2px solid ${variaveis.verde};
    border-radius: 4px;
  }
`
