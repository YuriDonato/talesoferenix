import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as db from '../../../services/firebase'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Container, MainCard } from '../../../styles'

const BookPage = () => {
  const { bookId, chapterId } = useParams<{
    bookId: string
    chapterId: string
  }>()

  const [chapterTitle, setChapterTitle] = useState({ title: '' })

  const getChapterTitle = async () => {
    console.log('entrou no getchaptertitle')
    console.log(`bookId: ${bookId}, chapterId: ${chapterId}`)
    if (bookId && chapterId) {
      console.log('entrou no if')
      console.log(`book: ${bookId}, chapter: ${chapterId}`)
      const chapterRef = db.doc(
        db.database,
        `/books/${bookId}/chapters/${chapterId}`
      )
      const chapterSnap = await db.getDoc(chapterRef)
      if (chapterSnap.exists()) {
        const tempData = chapterSnap.data()
        console.log('tempData:', tempData)
        setChapterTitle({ title: tempData.title })
      }
    }
  }

  useEffect(() => {
    console.log('entrou no useffect')
    getChapterTitle()
    console.log('saiu no useffect')
  }, [bookId, chapterId])

  return (
    <>
      <Header current="story" />
      <Container>
        <h1>Titulo {chapterTitle.title}</h1>
      </Container>
      <Footer />
    </>
  )
}

export default BookPage
