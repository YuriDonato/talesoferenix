import { useParams } from 'react-router-dom'
import { Tale } from '../../models/Tale'
import { useEffect, useState } from 'react'
import * as db from '../../services/firebase'
import * as S from '../../styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TaleTemplateCard from '../../components/TaleTemplateCard'
import Loading from '../../components/Loading'

const TalePage = () => {
  const { id } = useParams<{ id?: string }>()
  const [taleData, setTaleData] = useState<Tale | null>(null)

  const readTaleData = async () => {
    if (id) {
      const taleRef = db.doc(db.database, 'tales', id)
      const taleSnap = await db.getDoc(taleRef)
      if (taleSnap.exists()) {
        const tempData = taleSnap.data()
        setTaleData({
          author: tempData.author,
          description: tempData.author,
          releaseDate: tempData.releaseDate,
          tale: tempData.tale,
          title: tempData.title,
          updateDate: tempData.updateDate,
          id: tempData.id
        })
      }
    }
  }

  useEffect(() => {
    readTaleData()
  })

  return (
    <>
      <Header current="tales" />
      <S.MainCard>
        {taleData ? <TaleTemplateCard tale={taleData} /> : <Loading />}
      </S.MainCard>
      <Footer />
    </>
  )
}

export default TalePage
