import RegisterTab from './RegisterTab'
import * as S from './styles'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const AdminCard = () => {
  return (
    <S.Container>
      <S.Title>Admin</S.Title>
      <Tabs variant="soft-rounded" colorScheme="yellow">
        <TabList>
          <Tab>Conto</Tab>
          <Tab>Historia</Tab>
          <Tab>Universo</Tab>
          <Tab>Guia de Campo</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Tabs variant="soft-rounded" colorScheme="yellow">
              <TabList>
                <Tab>Cadastrar</Tab>
                <Tab>Editar</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <RegisterTab category="tale" />
                </TabPanel>
                <TabPanel>
                  <S.MainText>two!</S.MainText>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs variant="soft-rounded" colorScheme="yellow">
              <TabList>
                <Tab>Cadastrar</Tab>
                <Tab>Editar</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <RegisterTab category="story" />
                </TabPanel>
                <TabPanel>
                  <S.MainText>two!</S.MainText>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs variant="soft-rounded" colorScheme="yellow">
              <TabList>
                <Tab>Cadastrar</Tab>
                <Tab>Editar</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <RegisterTab category="universe" />
                </TabPanel>
                <TabPanel>
                  <S.MainText>two!</S.MainText>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs variant="soft-rounded" colorScheme="yellow">
              <TabList>
                <Tab>Cadastrar</Tab>
                <Tab>Editar</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <RegisterTab category="guide" />
                </TabPanel>
                <TabPanel>
                  <S.MainText>two!</S.MainText>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </S.Container>
  )
}

export default AdminCard
