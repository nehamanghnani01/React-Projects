
import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter =0

  const addValue = () => {
    console.log("counter value ", counter)
    // counter = counter +1
    if(counter+1<=20) {
      setCounter(counter+1)
    }
    
  }

  const decreaseValue = () => {
    console.log("counter value ", counter)
    if(counter-1>=0) {
      setCounter(counter-1)
    }
    
  }
  const resetValue = () => {
    console.log("counter value ", counter)
    // counter =  counter -1
    setCounter(0)
  }
  return (
    <>
      <p> Counter is : {counter}</p>
      <button onClick={addValue}>Add Value </button>
      <br/>
      <br/>
      <button onClick={decreaseValue}>Decrease Value </button>
      <br/>
      <br/>
      <button onClick={resetValue}>Reset Value </button>
    </>
  )
}

export default App
