import { useState } from 'react'
import Header from './ProjectComponents/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      {/* //TODO - add chatbot here */}
    </>
  )
}

export default App
