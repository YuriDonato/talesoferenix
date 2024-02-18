import RegisterTab from './RegisterTab'
import * as S from './styles'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const AdminCard = () => {
  return (
    <S.Container>
      <S.Title>Admin</S.Title>
      <Tabs variant="soft-rounded" colorScheme="yellow">
        <TabList>
          <Tab>Cadastrar</Tab>
          <Tab>Editar</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <RegisterTab />
          </TabPanel>
          <TabPanel>
            <S.MainText>two!</S.MainText>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </S.Container>
  )
}

export default AdminCard
