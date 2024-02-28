import React, { useState, FormEvent, useEffect, useRef } from 'react'
import * as S from '../styles'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Textarea,
  TabPanel,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Select
} from '@chakra-ui/react'

import { Tale, emptyTale } from '../../../models/Tale'
import {
  StoryBook,
  StoryChapter,
  StoryPage,
  emptyStoryBook,
  emptyStoryChapter,
  emptyStoryPage
} from '../../../models/Story'
import { Universe, emptyUniverse } from '../../../models/Universe'
import { Guide, emptyGuide } from '../../../models/Guide'
import { createDataEntry } from '../../../data/dbData'

type Props = {
  category: 'tale' | 'story' | 'universe' | 'guide'
}

const RegisterTab = ({ category }: Props) => {
  const toast = useToast()
  const [currentDate, setCurrentDate] = useState('')
  const editorRef = useRef<HTMLDivElement>(null)

  // Consts to create relation between forms and database
  // Tale
  const [taleData, setTaleData] = useState<Tale>(emptyTale)
  const [taleID, setTaleID] = useState('')
  // Story
  const [storyBookData, setStoryBookData] = useState<StoryBook>(emptyStoryBook)
  const [storyBookID, setStoryBookID] = useState('')
  const [storyChapterData, setStoryChapterData] =
    useState<StoryChapter>(emptyStoryChapter)
  const [storyChapterID, setStoryChapterID] = useState('')
  const [storyPageData, setStoryPageData] = useState<StoryPage>(emptyStoryPage)
  const [storyPageID, setStoryPageID] = useState('')
  // Universe
  const [universeData, setUniverseData] = useState<Universe>(emptyUniverse)
  const [universeID, setUniverseID] = useState('')
  // Guide
  const [guideData, setGuideData] = useState<Guide>(emptyGuide)
  const [guideID, setGuideID] = useState('')

  const createData = async (event: FormEvent, categoryCreated: string) => {
    event.preventDefault()
    switch (categoryCreated) {
      case 'tale':
        createDataEntry(taleID, taleData, 'tale')
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
        break
      case 'storybook':
        createDataEntry(storyBookID, storyBookData, 'storybook')
        setStoryBookData(emptyStoryBook)
        clearEditor()
        setStoryBookID('')
        toast({
          title: 'Livro criado com sucesso!',
          status: 'success',
          position: 'bottom',
          duration: 9000,
          isClosable: true
        })
        break
      case 'storychapter':
        createDataEntry(
          storyChapterID,
          storyChapterData,
          'storychapter',
          storyBookID
        )
        setStoryChapterData(emptyStoryChapter)
        clearEditor()
        setStoryChapterID('')
        toast({
          title: 'Capitulo criado com sucesso!',
          status: 'success',
          position: 'bottom',
          duration: 9000,
          isClosable: true
        })
        break
      case 'storypage':
        console.log(storyBookID)
        console.log(storyPageID)
        createDataEntry(
          storyPageID,
          storyPageData,
          'storypage',
          storyBookID,
          storyPageID
        )
        setStoryPageData(emptyStoryPage)
        clearEditor()
        setStoryPageID('')
        toast({
          title: 'Pagina criada com sucesso!',
          status: 'success',
          position: 'bottom',
          duration: 9000,
          isClosable: true
        })
        break
      case 'universe':
        createDataEntry(storyBookID, storyBookData, 'storybook')

        setTaleData(emptyTale)
        clearEditor()
        setTaleID('')
        toast({
          title: 'Universo criado com sucesso!',
          status: 'success',
          position: 'bottom',
          duration: 9000,
          isClosable: true
        })
        break
      case 'guide':
        createDataEntry(storyBookID, storyBookData, 'storybook')

        setTaleData(emptyTale)
        clearEditor()
        setTaleID('')
        toast({
          title: 'Guia criado com sucesso!',
          status: 'success',
          position: 'bottom',
          duration: 9000,
          isClosable: true
        })
        break
    }
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
    setTaleData({
      ...taleData,
      releaseDate: currentDate,
      updateDate: currentDate
    })

    return `${date} de ${monthName} de ${year}`
  }

  useEffect(() => {
    setCurrentDate(getDate())
  }, [])

  switch (category) {
    case 'tale':
      return (
        <>
          <form
            onSubmit={(e) => {
              createData(e, 'tale')
            }}
          >
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
    case 'story':
      return (
        <TabPanel>
          <Tabs variant="soft-rounded" colorScheme="yellow">
            <TabList>
              <Tab>Livro</Tab>
              <Tab>Capitulo</Tab>
              <Tab>Pagina</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <form
                  onSubmit={(e) => {
                    createData(e, 'storybook')
                  }}
                >
                  <FormControl>
                    <S.MainText>Criado em: {currentDate} </S.MainText>
                    <FormLabel color={'black'}>ID do Livro</FormLabel>
                    <Input
                      color={'black'}
                      value={storyBookID}
                      onChange={(e) => {
                        setStoryBookID(e.target.value),
                          setStoryBookData({
                            ...storyBookData,
                            id: e.target.value
                          })
                      }}
                      type="text"
                    />
                    <FormLabel color={'black'}>Titulo do Livro</FormLabel>
                    <Input
                      color={'black'}
                      value={storyBookData.title}
                      onChange={(e) =>
                        setStoryBookData({
                          ...storyBookData,
                          title: e.target.value
                        })
                      }
                      type="text"
                    />
                    <FormLabel color={'black'}>Autor</FormLabel>
                    <Input
                      color={'black'}
                      value={storyBookData.author}
                      onChange={(e) =>
                        setStoryBookData({
                          ...storyBookData,
                          author: e.target.value
                        })
                      }
                      type="text"
                    />
                    <FormLabel color={'black'}>Descrição</FormLabel>
                    <S.EditorContainer
                      ref={editorRef}
                      contentEditable={true}
                      onInput={(e) => {
                        setStoryBookData({
                          ...storyBookData,
                          description: e.currentTarget.innerHTML.replace(
                            /(font-family: Arial, sans-serif;|font-size: 11pt;|background-color: transparent;|background-color: rgb\(255, 255, 255\);)/g,
                            ''
                          )
                        })
                      }}
                      style={{ whiteSpace: 'pre-wrap' }}
                    ></S.EditorContainer>
                    <FormLabel color={'black'}>Ano de publicação</FormLabel>
                    <Textarea
                      color={'black'}
                      value={storyBookData.publishedYear}
                      onChange={(e) =>
                        setStoryBookData({
                          ...storyBookData,
                          publishedYear: e.target.value
                        })
                      }
                    />
                    <FormLabel color={'black'}>Total de Paginas</FormLabel>
                    <Textarea
                      color={'black'}
                      value={storyBookData.totalPages}
                      onChange={(e) =>
                        setStoryBookData({
                          ...storyBookData,
                          totalPages: e.target.value
                        })
                      }
                    />
                    <FormLabel color={'black'}>URL da capa</FormLabel>
                    <Textarea
                      color={'black'}
                      value={storyBookData.coverImage}
                      onChange={(e) =>
                        setStoryBookData({
                          ...storyBookData,
                          coverImage: e.target.value
                        })
                      }
                    />
                  </FormControl>
                  <Button color={'black'} marginTop={'1rem'} type="submit">
                    Criar Livro
                  </Button>
                </form>
              </TabPanel>
              <TabPanel>
                <form
                  onSubmit={(e) => {
                    createData(e, 'storychapter')
                  }}
                >
                  <FormControl>
                    <S.MainText>Criado em: {currentDate} </S.MainText>
                    <FormLabel>Livros</FormLabel>
                    <Select
                      placeholder="Selecione o livro"
                      onChange={(e) => {
                        setStoryBookID(e.currentTarget.value)
                      }}
                    >
                      <option value="1">1 - O Inicio do Fim</option>
                      <option value="2">2 - Nome capitulo 2</option>
                    </Select>
                    <FormLabel color={'black'}>ID do Capitulo</FormLabel>
                    <Input
                      color={'black'}
                      value={storyChapterID}
                      onChange={(e) => {
                        setTaleID(e.target.value),
                          setStoryChapterData({
                            ...storyChapterData,
                            id: e.target.value,
                            chapterNumber: e.target.value
                          }),
                          setStoryChapterID(e.target.value)
                      }}
                      type="text"
                    />
                    <FormLabel color={'black'}>Titulo do Capitulo</FormLabel>
                    <Input
                      color={'black'}
                      value={storyChapterData.title}
                      onChange={(e) =>
                        setStoryChapterData({
                          ...storyChapterData,
                          title: e.target.value
                        })
                      }
                      type="text"
                    />
                  </FormControl>
                  <S.EditorContainer
                    ref={editorRef}
                    contentEditable={true}
                    onInput={(e) => {
                      setStoryChapterData({
                        ...storyChapterData,
                        description: e.currentTarget.innerHTML.replace(
                          /(font-family: Arial, sans-serif;|font-size: 11pt;|background-color: transparent;|background-color: rgb\(255, 255, 255\);)/g,
                          ''
                        )
                      })
                    }}
                    style={{ whiteSpace: 'pre-wrap' }}
                  ></S.EditorContainer>
                  <Button color={'black'} marginTop={'1rem'} type="submit">
                    Criar Capitulo
                  </Button>
                </form>
              </TabPanel>
              <TabPanel>
                <form
                  onSubmit={(e) => {
                    createData(e, 'storypage')
                  }}
                >
                  <FormControl>
                    <FormLabel>Livros</FormLabel>
                    <Select
                      placeholder="Selecione o livro"
                      onChange={(e) => {
                        setStoryBookID(e.currentTarget.value)
                      }}
                    >
                      <option value="1">1 - O Inicio do Fim</option>
                      <option value="2">2 - Nome livro 2</option>
                    </Select>
                    <FormLabel>Capitulos</FormLabel>
                    <Select
                      placeholder="Selecione o capitulo"
                      onChange={(e) => {
                        setStoryChapterID(e.currentTarget.value)
                      }}
                    >
                      <option value="1">1 - nome cap 1</option>
                      <option value="2">2 - Nome cap 2 2</option>
                    </Select>
                    <S.MainText>Criado em: {currentDate} </S.MainText>
                    <FormLabel color={'black'}>ID da Pagina</FormLabel>
                    <Input
                      color={'black'}
                      value={storyPageID}
                      onChange={(e) => {
                        setStoryPageID(e.target.value),
                          setStoryPageData({
                            ...storyPageData,
                            id: e.target.value,
                            pageNumber: e.target.value
                          })
                      }}
                      type="text"
                    />
                    <FormLabel color={'black'}>Texto da Pagina</FormLabel>
                    <S.EditorContainer
                      ref={editorRef}
                      contentEditable={true}
                      onInput={(e) => {
                        setStoryPageData({
                          ...storyPageData,
                          text: e.currentTarget.innerHTML.replace(
                            /(font-family: Arial, sans-serif;|font-size: 11pt;|background-color: transparent;|background-color: rgb\(255, 255, 255\);)/g,
                            ''
                          )
                        })
                      }}
                      style={{ whiteSpace: 'pre-wrap' }}
                    ></S.EditorContainer>
                  </FormControl>
                  <Button color={'black'} marginTop={'1rem'} type="submit">
                    Criar Pagina
                  </Button>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </TabPanel>
      )
    case 'universe':
      return (
        <form
          onSubmit={(e) => {
            createData(e, 'universe')
          }}
        >
          <FormControl>
            <S.MainText>Criado em: {currentDate} </S.MainText>
            <FormLabel color={'black'}>ID d</FormLabel>
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
      )
    case 'guide':
      return (
        <form
          onSubmit={(e) => {
            createData(e, 'guide')
          }}
        >
          <FormControl>
            <S.MainText>Criado em: {currentDate} </S.MainText>
            <FormLabel color={'black'}>ID d</FormLabel>
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
      )
    default:
      return (
        <>
          <p>teste</p>
        </>
      )
  }
}

export default RegisterTab
