import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './components/login'
import ChatPage from './pages/chatPage'
import Signup from './components/Signup'
import LoginPage from './pages/LoginPage'

 const Routing=()=> {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/chat' element={<ChatPage/>}/>
    </Routes>
    </div>
  )
}
export default Routing