import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeCard from '../../components/HomeCard'

const Home = () => {
  return (
    <div>
      <Header current="home" />
      <HomeCard />
      <Footer />
    </div>
  )
}

export default Home
