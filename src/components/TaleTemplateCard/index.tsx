import { Tale } from '../../models/Tale'
import { DecoImgCima } from '../decoImg'
import * as S from './styles'

type Props = {
  tale: Tale
}

const TaleTemplateCard: React.FC<Props> = ({ tale }) => {
  return (
    <S.Container>
      <>
        <div key={tale.id}>
          <S.Title>{tale.title}</S.Title>
          <DecoImgCima />
          <S.TaleText dangerouslySetInnerHTML={{ __html: tale.tale }} />
          <S.Author>{`- ${tale.author}`}</S.Author>
        </div>
      </>
    </S.Container>
  )
}

export default TaleTemplateCard
