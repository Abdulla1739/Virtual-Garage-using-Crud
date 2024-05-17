import './App.css'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import './bootstrap.min.css'
import { Routes,Route } from 'react-router-dom'
import NavBar from './components/landingPage/NavBar'
import Services from './components/landingPage/Services'



function App() {
  const login = window.localStorage.getItem("isLogin");


  return (
    <>
<Routes>
  <Route element={login? <Home/>: <Landing/>} path='/'/>
  {/* <Route element={<Home/>} path='/home'/> */}
  <Route element={<NavBar/>} path="/login"/>
  <Route element={<Services/>} path ="#features"/>
</Routes>
<Footer/>
    </>
  )
}

export default App
