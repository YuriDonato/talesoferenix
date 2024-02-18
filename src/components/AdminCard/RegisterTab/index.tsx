import React, { useState, FormEvent, useEffect, useRef } from 'react'
import * as db from '../../../services/firebase'
import { Tale, emptyTale } from '../../../models/Tale'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Textarea
} from '@chakra-ui/react'

import * as S from '../styles'

const RegisterTab: React.FC = () => {
  const toast = useToast()
  const [taleData, setTaleData] = useState<Tale>(emptyTale)
  const [taleID, setTaleID] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const editorRef = useRef<HTMLDivElement>(null)

  const createTaleData = async (event: FormEvent) => {
    event.preventDefault()
    const newData = { ...taleData }
    db.setDoc(db.doc(db.database, 'tales', taleID), newData)
    setTaleData(emptyTale)
    clearEditor()
    setTaleID('')
    toast({
      title: 'Conto criado com sucesso!',
      status: 'success',
      position: 'bottom',
      duration: 9000,
      isClosable: true
    })
  }

  const clearEditor = () => {
    if (editorRef.current) {
      editorRef.current.innerText = '' // Limpa o conteúdo do editor
    }
  }

  function getDate() {
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const date = today.getDate()

    const monthNames: string[] = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    const monthName = monthNames[month]
    return `${date} de ${monthName} de ${year}`
  }

  useEffect(() => {
    setCurrentDate(getDate())
    setTaleData({ ...taleData, releaseDate: currentDate })
  }, [])

  return (
    <>
      <form onSubmit={createTaleData}>
        <FormControl>
          <S.MainText>Criado em: {currentDate} </S.MainText>
          <FormLabel color={'black'}>ID do Conto</FormLabel>
          <Input
            color={'black'}
            value={taleID}
            onChange={(e) => {
              setTaleID(e.target.value),
                setTaleData({ ...taleData, id: e.target.value })
            }}
            type="text"
          />
          <FormLabel color={'black'}>Titulo do Conto</FormLabel>
          <Input
            color={'black'}
            value={taleData.title}
            onChange={(e) =>
              setTaleData({
                ...taleData,
                title: e.target.value
              })
            }
            type="text"
          />
          <FormLabel color={'black'}>Autor</FormLabel>
          <Input
            color={'black'}
            value={taleData.author}
            onChange={(e) =>
              setTaleData({
                ...taleData,
                author: e.target.value
              })
            }
            type="text"
          />
          <FormLabel color={'black'}>Descrição</FormLabel>
          <Textarea
            color={'black'}
            value={taleData.description}
            onChange={(e) =>
              setTaleData({
                ...taleData,
                description: e.target.value
              })
            }
          />
          <FormLabel color={'black'}>Conto</FormLabel>
          <S.EditorContainer
            ref={editorRef}
            contentEditable={true}
            onInput={(e) => {
              setTaleData({
                ...taleData,
                tale: e.currentTarget.innerHTML.replace(
                  /(font-family: Arial, sans-serif;|font-size: 11pt;|background-color: transparent;|background-color: rgb\(255, 255, 255\);)/g,
                  ''
                )
              })
            }}
            style={{ whiteSpace: 'pre-wrap' }}
          ></S.EditorContainer>
        </FormControl>
        <Button color={'black'} marginTop={'1rem'} type="submit">
          Criar Conto
        </Button>
      </form>
    </>
  )
}

export default RegisterTab
