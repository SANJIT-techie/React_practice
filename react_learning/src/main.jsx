import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function App() {
    let counter = 15

    const addValue = () => {
        console.log(counter+1);

    const removeValue = () => {
        console.log(counter-1);
    
    }
    return(
      <>
       <h1>React course with hitesh {counter}</h1>
        <h2>counter value: {counter}</h2>
        <Button onClick={addValue}>add value</Button>
        <button onClick={removeValue}>remove value</button>
        <p>footer: </p>

       </>
    )
}

createRoot(document.getElementById('root')).render(
    <App />
)
