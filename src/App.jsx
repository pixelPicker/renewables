import { useState } from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
