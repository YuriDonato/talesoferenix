import Footer from '../../components/Footer'
import Header from '../../components/Header'
import StoryPage from '../../components/storyPage'

// Por aqui a conexão db e um filtro para
// Essa pagina é a historia principal, criar uma entrada para ela, e tambem a visualização de paginas,
// a visualização de paginas deve ser pela conexão db enviando a pagina pro useparams no taletemplatecard
const Story = () => {
  return (
    <>
      <Header current="story" />
      <StoryPage />
      <Footer />
    </>
  )
}

export default Story
