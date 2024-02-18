import * as S from './styles'

import erenix from '../../assets/images/erenixlogo.png'
import munnin from '../../assets/images/munnin-frontpage.png'
import decoImg from '../../assets/images/bottom-ornament.png'
import { lastUpdate } from '../../data/lastUpdate'
import { DecoImgBaixo } from '../decoImg'
import PixDonation from '../PixDonation'

const HomeCard = () => {
  return (
    <S.Container>
      <S.Logo src={erenix} alt="erenix" />
      <S.GridContainer>
        <S.Aside>
          <S.Avatar src={munnin} alt="munnin" />
          <S.Text>Munnin Torunn</S.Text>
          <S.Text>(815-930)</S.Text>
        </S.Aside>
        <div>
          <S.MainText>
            É um universo ficcional criado a muitos anos atras por mim e conta
            com influencia de diversos momentos da minha vida e também de
            diversas pessoas que vieram e foram no decorrer da minha historia.
          </S.MainText>
          <S.MainText>
            A historia é tratada da visão de um personagem chamado Loki Torunn,
            e a sua trajetoria nesse mundo chamado Erenix.
          </S.MainText>
          <S.SecondaryText>
            <S.Text>
              <S.Button to="/story">A Historia Principal </S.Button>
              conta a trajetoria de Loki Torunn e sua busca por entender a si
              proprio.
            </S.Text>
            <S.Text>
              <S.Button to="/tales">Os Contos </S.Button>
              tratam da visão de outros personagens sobre o mundo de Erenix,
              retratando suas opiniões e teorias.
            </S.Text>
            <S.Text>
              <S.Button to="/universe">O Universo </S.Button>é uma seção que
              explica e define melhor as razoes e porques desse mundo.
            </S.Text>
            <S.Text>
              <S.Button to="/guide">O Guia de Campo </S.Button>
              de Erenix que contem toda a informação sobre seres vivos e também
              os quase vivos, assim como também conta com uma descrição da fauna
              e flora desse mundo.
            </S.Text>
          </S.SecondaryText>
        </div>
      </S.GridContainer>
      <hr />
      <S.UpdatedText>
        <S.Text>4 Março 2023: Pagina criada.</S.Text>
        <S.Text>
          5 Março 2023: Conto &quot;Carpa Prateada&quot; adicionado
        </S.Text>
        <S.Text>6 Março 2023: Conto &quot;Hob e Gob&quot; adicionado</S.Text>
        <S.Text>24 Abril 2023: Conto &quot;O Acordo&quot; adicionado</S.Text>
        <DecoImgBaixo />
        <S.MiniText>Ultima atualização: {lastUpdate}</S.MiniText>
      </S.UpdatedText>
    </S.Container>
  )
}

export default HomeCard
