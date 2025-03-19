import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
      let pass=""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) {
        str += "0123456789"
      }

      if(charAllowed) {
        str += "@*&%$!}{()#"
      }
        
      for(let i=1; i<=length; i++) {
        let char = Math.floor((Math.random() * str.length + 1))
        pass = str.charAt(char)
      }
      
      setPassword(pass)

  } , 
  [length, numberAllowed, charAllowed, setPassword])

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-800">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-6 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center text-2xl font-semibold mb-4">
          Password Generator
        </h1>
        <div className="flex items-center space-x-2 shadow rounded-lg overflow-hidden bg-gray-600">
          <input
            type="text"
            className="outline-none w-full py-2 px-3 text-center text-lg bg-gray-600 text-white"
            value={password || ""}
            placeholder="Generated Password"
            readOnly
          />
          <button
            
            className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 hover:bg-blue-800 transition"
          >
            Copy
          </button>
        </div>

        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range' 
            min={6} 
            max={100} 
            value={length} 
            onChange={ (e) => {setLength(e.target.value)}}
            className='cursor-pointer'>

            </input>
            <label>Length : {length}</label>
            <div className='flex items-center gap-x-1'>
               <input 
                type='checkbox' 
                defaultChecked={numberAllowed} 
                id='numberInput' 
                onChange={() => setNumberAllowed((prev)=> !prev)}>
              </input> 
              <label htmlFor='numberInput'>Numbers</label>

               <input 
                type='checkbox' 
                defaultChecked={charAllowed} 
                id='charInput' 
                onChange={() => setCharAllowed((prev)=> !prev)}>
              </input> 
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App
