import './App.css'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MainBody from './components/Mainbody/MainBody'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Cards/>
      <MainBody />
      <Footer />
    </>
  )
}

export default App
