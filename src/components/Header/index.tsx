import { SettingsIcon } from '@chakra-ui/icons'
import * as S from './styles'

type Props = {
  current: 'home' | 'story' | 'tales' | 'universe' | 'guide'
}

const Header = ({ current }: Props) => {
  return (
    <S.MainContainer>
      <S.Header>
        <S.Container>
          <S.Links>
            <S.Button className={current === 'home' ? 'current' : ''} to="/">
              Inicio
            </S.Button>
          </S.Links>
          <S.Links>
            <S.Button
              className={current === 'story' ? 'current' : ''}
              to="/story"
            >
              Historia
            </S.Button>
          </S.Links>
          <S.Links>
            <S.Button
              className={current === 'tales' ? 'current' : ''}
              to="/tales"
            >
              Contos
            </S.Button>
          </S.Links>
          <S.Links>
            <S.Button
              className={current === 'universe' ? 'current' : ''}
              to="/universe"
            >
              Universo
            </S.Button>
          </S.Links>
          <S.Links>
            <S.Button
              className={current === 'guide' ? 'current' : ''}
              to="/guide"
            >
              Guia de Campo
            </S.Button>
          </S.Links>
          <S.Links>
            <S.Button to="/admin">
              <SettingsIcon />
            </S.Button>
          </S.Links>
        </S.Container>
      </S.Header>
    </S.MainContainer>
  )
}

export default Header
