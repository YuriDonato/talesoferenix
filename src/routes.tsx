import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Story from './pages/Story'
import Tales from './pages/Tales'
import Universe from './pages/Universe'
import Guide from './pages/Guide'
import Admin from './pages/Admin'
import WIP from './pages/WIP'
import TalePage from './pages/Tale'
import Donate from './pages/Donate'
import BookChapter from './pages/Book'
import BookPage from './pages/Book/Page'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/story" element={<Story />}></Route>
    <Route path="/story/:id" element={<BookChapter />}></Route>
    <Route path="/story/:bookId/:pageId"  element={<BookPage />}></Route>
    <Route path="/tales" element={<Tales />}></Route>
    <Route path="/tales/:id" element={<TalePage />}></Route>
    <Route path="/universe" element={<Universe />}></Route>
    <Route path="/guide" element={<Guide />}></Route>
    <Route path="/admin" element={<Admin />}></Route>
    <Route path="/donate" element={<Donate />}></Route>
    <Route path="*" element={<WIP />}></Route>
  </Routes>
)

export default Rotas
