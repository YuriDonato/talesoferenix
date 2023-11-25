import styled from 'styled-components'
import { MainCard, cores, texto } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled(MainCard)``

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

export const MainText = styled(Text)`
  text-align: center;
`

export const Button = styled(Link)`
  text-decoration: none;
  color: ${cores.preta};
  text-decoration: underline;
  text-decoration-color: ${cores.preta};
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
    width: 25%;
  }
`

export const MiniText = styled(Text)`
  font-size: ${texto.pequeno};
  margin-top: 1rem;
`
