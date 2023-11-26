import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  width: 100%;
  height: fit-content;
`

export const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`

export const Button = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: ${cores.amarelo};
  background-color: ${cores.pretaOpacity};
  border-radius: 1rem;
  text-decoration: underline;
  text-decoration-color: white;
  &:hover {
    color: white;
  }
`

export const Links = styled.li`
  transition: 0.5s ease all;
  &:hover {
    transform: scale(1.1);
  }

  .current {
    text-decoration: underline;
    color: white;
    text-decoration-color: ${cores.amarelo};
  }
`
