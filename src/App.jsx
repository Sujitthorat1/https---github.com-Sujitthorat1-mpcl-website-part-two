import './App.css'
import BgVideoPlayCard from './components/Cards/BgVideoPlayCards/BgVideoPlayCards'

import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import ScrollingCards from './components/Home/ScrollingCards/ScrollingCards'
import MainBody from './components/Mainbody/MainBody'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <BgVideoPlayCard />
      <ScrollingCards />
      {/* <Cards/> */}
      <MainBody />
      
      <Footer />
    </>
  )
}

export default App
