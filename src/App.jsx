import { useState } from 'react'
import Header from './ProjectComponents/Header'
import Chatbot from './ProjectComponents/Chatbot'
import { Outlet } from 'react-router'
import Footer from './ProjectComponents/Footer'

function App() {

  return (
    <>
      <Header />
      <Chatbot />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
