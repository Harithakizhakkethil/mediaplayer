
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import WatchHistory from './pages/WatchHistory'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchHistory' element={<WatchHistory/>}/>

    </Routes>
      
      
      
      <Footer/>
    </>
  )
}

export default App
