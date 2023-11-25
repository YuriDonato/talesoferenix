import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  preta: '#111',
  branca: '#fff',
  amarelo: '#FFCC00',
  pretaOpacity: 'rgba(0, 0, 0, 0.5)',
  cinza: '#8a8a8a'
}

export const texto = {
  pequeno: '0.8em',
  padrao: '1em',
  grande: '1.2em',
  muitoGrande: '1.5em',
  enrome: '2em'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IM Fell DW Pica', serif;
    color: ${cores.branca};
  }

  body {
    background-color: ${cores.cinza}
  }
`

export const MainCard = styled.div`
  margin: 1rem;
  color: black;
  padding: 1rem;
  background-color: white;
`
