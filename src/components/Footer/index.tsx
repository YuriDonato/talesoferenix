import { Link } from 'react-router-dom'
import * as S from './styles'

const Footer = () => {
  return (
    <>
      <S.MainContainer>
        <S.Header>
          <S.Container>
            <S.Links>
              <S.Button to="/contact">Contato</S.Button>
            </S.Links>
            <S.Links>
              <S.Button to="/mapsite">Mapa do Site</S.Button>
            </S.Links>
            <S.Links>
              <S.Button to="/search">Buscar</S.Button>
            </S.Links>
            <S.Links>
              <S.Button to="/donate">Doar</S.Button>
            </S.Links>
            <S.CopyrightText>
              Copyright © 2014–2023 by Beltrão Y. Donato. All Rights Reserved.
            </S.CopyrightText>
          </S.Container>
        </S.Header>
      </S.MainContainer>
      <p>contato</p>
      <p>mapa do site</p>
      <p>buscar</p>
      <Link to={'/donate'}>doar</Link>
      <p></p>
    </>
  )
}

export default Footer
