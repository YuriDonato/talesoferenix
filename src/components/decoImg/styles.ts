import styled from 'styled-components'

export const ImgBaixo = styled.img`
  display: block;
  margin: auto;
  max-width: 25%;
`

export const ImgCima = styled(ImgBaixo)`
  transform: rotate(180deg);
`
