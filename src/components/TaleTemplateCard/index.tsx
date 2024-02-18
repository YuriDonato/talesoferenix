import { Tale } from '../../models/Tale'
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
          <div dangerouslySetInnerHTML={{ __html: tale.tale }} />
        </div>
      </>
    </S.Container>
  )
}

export default TaleTemplateCard
