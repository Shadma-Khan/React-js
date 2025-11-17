import { useState } from 'react'
import './App.css'

function App() {

// const count = 0

  let [count, setCount] = useState(0)
  

  const addValue = () => {

    setCount(count + 1);

        console.log("count value", count);

  }

  const removeValue = () =>{
    setCount(count-1)
    console.log("remove value", count)
    
  }

  return (
    <>
      <h1>counter</h1>
      <h2>counter value : {count}</h2>
      <button
      onClick={addValue}>add value  </button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
