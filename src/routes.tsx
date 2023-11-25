import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Story from './pages/Story'
import Tales from './pages/Tales'
import Universe from './pages/Universe'
import Guide from './pages/Guide'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/story" element={<Story />}></Route>
    <Route path="/tales" element={<Tales />}></Route>
    <Route path="/universe" element={<Universe />}></Route>
    <Route path="/guide" element={<Guide />}></Route>
  </Routes>
)

export default Rotas
