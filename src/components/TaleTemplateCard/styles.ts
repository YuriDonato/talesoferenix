import styled from 'styled-components'
import { MainCard, cores, texto } from '../../styles'

export const Container = styled(MainCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  // background-color: #f8f8f8;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h2`
  display: flex;
  font-family: 'Cinzel Decorative', serif;
  font-size: ${texto.muitoGrande};
  margin-bottom: 0.5rem;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const Text = styled.p`
  font-size: ${texto.grande};
  line-height: 1.6;
`

export const Author = styled.small`
  font-size: ${texto.grande};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

export const MainText = styled(Text)`
  text-align: center;
`

export const TaleText = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`
