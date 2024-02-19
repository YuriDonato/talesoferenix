import styled from 'styled-components'
import { cores, texto } from '../../styles'
import { Link } from 'react-router-dom'

export const Header = styled.div`
  width: 100%;
  height: fit-content;
  background-color: black;
  border-bottom-right-radius: 2rem;
`

export const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  max-width: 600px;
  margin: 0 auto;
  align-items: center;
`

export const MainContainer = styled.div`
  margin: 0 auto 0 auto;
  color: black;
  max-width: 600px;
  display: block;
`

export const Button = styled(Link)`
  // padding: 0.5rem;
  text-decoration: none;
  color: ${cores.amarelo};
  // background-color: ${cores.pretaOpacity};
  // border-radius: 1rem;
  // text-decoration: underline;
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
    // text-decoration: underline;
    color: white;
    text-decoration-color: ${cores.amarelo};
  }
`

export const CopyrightText = styled.p`
  transition: 0.5s ease all;

  font-size: ${texto.pequeno};

  .current {
    // text-decoration: underline;
    color: white;
    text-decoration-color: ${cores.amarelo};
  }

  // padding: 0.5rem;
  text-decoration: none;
  color: ${cores.amarelo};
  // background-color: ${cores.pretaOpacity};
  // border-radius: 1rem;
  // text-decoration: underline;
  text-decoration-color: white;
  &:hover {
    color: white;
  }
`
