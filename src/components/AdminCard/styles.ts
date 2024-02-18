import styled from 'styled-components'
import { MainCard, cores, texto } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled(MainCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.img`
  max-width: 100%;
  display: block;
  margin: auto;
`

export const Avatar = styled.img`
  max-width: 100%;
`

export const Text = styled.p`
  color: ${cores.preta};
  padding-bottom: 0.5rem;
`
export const Title = styled.h2`
  display: block;
  font-family: 'Cinzel Decorative', serif;
  color: ${cores.preta};
  margin-bottom: 1rem;
`

export const MainText = styled(Text)`
  text-align: center;
`

export const Button = styled(Link)`
  text-decoration: none;
  color: ${cores.preta};
  text-decoration: underline;
  text-decoration-color: ${cores.preta};
  &:hover {
    color: ${cores.amarelo};
    text-decoration-color: ${cores.amarelo};
  }
`

export const SecondaryText = styled.div`
  padding-top: 1rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  gap: 1rem;
`

export const Aside = styled.aside`
  font-size: ${texto.pequeno};
`

export const UpdatedText = styled(Text)`
  margin-top: 1.5rem;
  text-align: center;

  img {
    display: block;
    margin: auto;
    max-width: 25%;
  }
`

export const MiniText = styled(Text)`
  font-size: ${texto.pequeno};
  margin-top: 1rem;
`

export const EditorContainer = styled.div`
  width: 300px; /* Tamanho horizontal fixo */
  min-height: 100px; /* Altura vertical mínima */
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  padding: 8px;
  line-height: 1.5;
  font-size: 16px;
  color: #2d3748;
  outline: none;
  transition: border-color 0.2s;
  overflow-y: auto;

  &:focus {
    border-color: #3182ce;
  }

  &:empty:before {
    content: attr(placeholder);
    color: #a0aec0;
  }
`
