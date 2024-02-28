import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { Container } from '../HomeCard/styles'
import * as db from '../../services/firebase'
import { StoryBook } from '../../models/Story'
import { useEffect, useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import { Link } from 'react-router-dom'

import * as S from './styles'

const StoryPage = () => {
  const [bookList, setBookList] = useState<StoryBook[]>([])
  const [emptyList, setEmptyList] = useState<boolean>(true)

  const fetchBooks = async () => {
    try {
      const querySnapshot = await db.getDocs(
        db.collection(db.database, 'books')
      )
      if (querySnapshot.empty) {
        setEmptyList(true)
      } else {
        setEmptyList(false)
        const fetchedBooks: StoryBook[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data() as DocumentData
          const book: StoryBook = {
            id: doc.id,
            coverImage: data.coverImage,
            description: data.description,
            author: data.author,
            publishedYear: data.publishedYear,
            title: data.title,
            totalPages: data.totalPages
          }
          fetchedBooks.push(book)
        })
        setBookList(fetchedBooks)
      }
    } catch (error) {
      console.error('Error fetching tales:', error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Container>
      <h1>Livros</h1>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={6}
        width="100%"
      >
        {bookList.map((book) => (
          <Grid
            key={book.id}
            as={Link}
            to={`${book.id}`}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textDecoration="none"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Box p="6">
              <Image w={'100%'} src={`${book.coverImage}`}></Image>
              <S.Title>{book.title}</S.Title>
              <Text>Autor: {book.author}</Text>
              <Text color="gray.600">{book.description}</Text>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default StoryPage
