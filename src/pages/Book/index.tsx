import { Link, useParams } from 'react-router-dom'
import { StoryChapter, emptyStoryChapter } from '../../models/Story'
import { useEffect, useState } from 'react'
import * as db from '../../services/firebase'
import { DocumentData } from 'firebase/firestore'
import Loading from '../../components/Loading'
import { Box, Grid, Text } from '@chakra-ui/react'
import * as S from '../../styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const BookChapter = () => {
  const { id } = useParams<{ id?: string }>()
  const [chapterData, setChapterData] =
    useState<StoryChapter>(emptyStoryChapter)

  const [chapterList, setChapterList] = useState<StoryChapter[]>([])
  const [emptyList, setEmptyList] = useState<boolean>(true)

  const fetchChapter = async () => {
    try {
      const querySnapshot = await db.getDocs(
        db.collection(db.database, `books/${id}/chapters`)
      )
      if (querySnapshot.empty) {
        setEmptyList(true)
      } else {
        setEmptyList(false)
        const fetchedChapters: StoryChapter[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data() as DocumentData
          const chapter: StoryChapter = {
            id: doc.id,
            chapterNumber: data.chapterNumber,
            description: data.description,
            title: data.title
          }
          fetchedChapters.push(chapter)
        })
        setChapterList(fetchedChapters)
      }
    } catch (error) {
      console.error('Error fetching chapters:', error)
    }
  }

  useEffect(() => {
    fetchChapter()
  }, [])

  return (
    <>
      <Header current="story" />
      <S.Container>
        {emptyList ? (
          <Loading />
        ) : (
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={6}
            width="100%"
          >
            {chapterList.map((chapter) => (
              <Grid
                key={chapter.id}
                as={Link}
                to={`${chapter.id}`}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                textDecoration="none"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.05)' }}
              >
                <Box p="6">
                  <S.Title>{chapter.title}</S.Title>
                  <Text color="gray.600">{chapter.description}</Text>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </S.Container>
      <Footer />
    </>
  )
}

export default BookChapter
