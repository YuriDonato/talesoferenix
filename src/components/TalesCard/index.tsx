import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Heading, Text } from '@chakra-ui/react'
import * as db from '../../services/firebase'
import { Tale } from '../../models/Tale'
import { DocumentData } from '@firebase/firestore-types'
import * as S from './styles'

const TalesCard = () => {
  const [taleList, setTaleList] = useState<Tale[]>([])
  const [emptyList, setEmptyList] = useState<boolean>(false)

  const fetchTales = async () => {
    try {
      const querySnapshot = await db.getDocs(
        db.collection(db.database, 'tales')
      )
      if (querySnapshot.empty) {
        setEmptyList(true)
      } else {
        const fetchedTales: Tale[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data() as DocumentData
          const tale: Tale = {
            id: doc.id,
            author: data.author,
            description: data.description,
            releaseDate: data.releaseDate,
            tale: data.tale,
            title: data.title,
            updateDate: data.updateDate
          }
          fetchedTales.push(tale)
        })
        setTaleList(fetchedTales)
      }
    } catch (error) {
      console.error('Error fetching tales:', error)
    }
  }

  useEffect(() => {
    fetchTales()
  }, [])

  return (
    <S.Container>
      {emptyList ? (
        <div>Não há contos disponíveis</div>
      ) : (
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={6}
          width="100%"
        >
          {taleList.map((tale) => (
            <Grid
              key={tale.id}
              as={Link}
              to={`${tale.id}`}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              textDecoration="none"
              transition="transform 0.3s ease"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Box p="6">
                <S.Title>{tale.title}</S.Title>
                <Text color="gray.600">{tale.description}</Text>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </S.Container>
  )
}

export default TalesCard
