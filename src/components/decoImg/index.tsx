import decoImg from '../../assets/images/bottom-ornament.png'
import * as S from './styles'

const DecoImgCima = () => {
  return (
    <>
      <S.ImgCima src={decoImg} alt="detalhe de baixo" />
    </>
  )
}

const DecoImgBaixo = () => {
  return (
    <>
      <S.ImgBaixo src={decoImg} />
    </>
  )
}

export { DecoImgBaixo, DecoImgCima }
