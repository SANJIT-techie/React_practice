import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')

const passwordRef = useRef(null)

const generatePassword = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*()_+"

  for (let index = 1; index < length; index++) {
    const char = Math.floor(Math.random() * str.length + 1 )
    pass += str.charAt(char)
  }

  setpassword(pass)
}, [length,numberAllowed,charAllowed])


//is generally used when you want to run some side effect automatically in response to changes in state or props

// useEffect(() => {
//   generatePassword()
// }, [length,numberAllowed,charAllowed])

const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
}

  return (
      <div className='text-4xl w-full h-screen flex flex-col justify-center items-center shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='p-6 flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3' 
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 pb-3'>
          copy
          </button>
        </div>
        <div className='flex gap-x-3 mx-5'>
        <input type="range"
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        />
        <label className='text-green-500' htmlFor='lenght'>length : {length}</label>
        <div className='flex items-center space-x-1'>
          <input className='flex self-center mx-5'
          type="checkbox"
          style={{ transform: 'scale(2.5)', marginRight: '10px' }} 
          defaultChecked = {numberAllowed} 
          onChange={() => {
            setnumberAllowed(!numberAllowed)
          }}/>
          <label className='pb-2' htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center space-x-1'>
          <input className='flex self-center mx-5'
          type="checkbox"
          style={{ transform: 'scale(2.5)', marginRight: '8px' }} 
          defaultChecked = {numberAllowed} 
          onChange={() => {
            setcharAllowed(!charAllowed)
          }}/>
          <label className='pb-2' htmlFor="character">Character</label>
        </div>
        </div>
        <div><button onClick={generatePassword} className='bg-slate-500 outline-none py-3 pb-6
         px-8 rounded-full shadow-lg text-white m-4 '>generate</button></div>
      </div>
  )
}

export default App

// outline-none px-4 py-1 rounded-full shadow-lg text-black