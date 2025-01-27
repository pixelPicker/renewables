import { useState } from 'react'
import Header from './ProjectComponents/Header'
import Chatbot from './ProjectComponents/Chatbot'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Header />
      <Chatbot />
      <Outlet />
      {/* //TODO - add chatbot here */}
    </>
  )
}

export default App
