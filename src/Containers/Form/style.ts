import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.form`
  display: block;
  max-width: 100%;
  width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`
export const Botao = styled.button`
  padding: 8px 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${variaveis.verde};
  border-radius: 4px;
  margin: 16px 8px 0 0;
`
export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 2px solid;
  border-image: linear-gradient(to bottom right, #000, #777);
  border-image-slice: 1;
  &:focus {
    border: 2px solid ${variaveis.verde};
    border-radius: 4px;
  }
`
export const PErro = styled.p`
  margin-top: -14px;
  margin-bottom: 24px;
  font-size: 12px;
  color: ${variaveis.vermelho};
`
