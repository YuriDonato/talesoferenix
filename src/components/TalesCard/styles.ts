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

export const NavButton = styled(Link)`
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

export const TaleText = styled.pre`
  color: ${cores.preta};
  padding-bottom: 0.5rem;
  text-align: center;
`

// teste

export const CardContainer = styled(Link)`
  display: block;
  width: 300px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`

export const CardContent = styled.div`
  padding: 16px;
`

export const TitleTest = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #555;
`
