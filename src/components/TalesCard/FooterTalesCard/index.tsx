import { Link } from 'react-router-dom'
import { DecoImgCima, DecoImgBaixo } from '../../decoImg'
import * as S from './styles'

type Props = {
  lastUpdate?: string
}

const FooterTalesCard = ({ lastUpdate }: Props) => {
  return (
    <>
      <DecoImgBaixo />
      <S.LastUpdate>Ultima atualização: {lastUpdate}</S.LastUpdate>
      <Link to={'/tales'}>Voltar</Link>
    </>
  )
}

export default FooterTalesCard
