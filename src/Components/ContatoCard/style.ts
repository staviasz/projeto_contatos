import styled from 'styled-components'

export const Contato = styled.li`
  display: block;
  padding: 16px;
  position: relative;
  max-width: 700px;

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 650px;
    height: 5px;
    background-color: #ccc;
    margin-bottom: 2px;
  }
`
