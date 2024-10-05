import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let newArr = ["new","pappu"]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card userName = "sanjit" post='senior engineer'/>
      <Card userName = "hitesh" post = {newArr}/>
      <Card userName = ""/>
    </>
  )
}

export default App
