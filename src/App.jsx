import './App.css'
import BgVideoPlayCard from './components/Cards/BgVideoPlayCards/BgVideoPlayCards'
import CaseStudy from './components/CaseStudy/index'
import Client from './components/Client/ClientSlieder'
import Directors from './components/Directors/Directors'

import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import ScrollingCards from './components/Home/ScrollingCards/ScrollingCards'
import MainBody from './components/Mainbody/MainBody'
import Navbar from './components/Navbar/Navbar'
import Testimonial from './components/Testimonial'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      {/* <BgVideoPlayCard /> */}
      <ScrollingCards />
      {/* <Cards/> */}
      <MainBody />
      <CaseStudy />
      <Directors/>
      <Client />
      <Testimonial/>
      <Footer />
    </>
  )
}

export default App
