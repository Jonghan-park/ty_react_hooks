import React from 'react'
import { useState } from 'react';

const UseStateComponent= () => {
  const [arr, setArr] = useState<number[]>([]);
  const [num, setNum] = useState<number>(0)

  const handleNumber = () => {
    
  }
  return (
    <div className="hooks_container">
      <h1>useState</h1>
      <div className="hooks_contents">
        <input type="number" placeholder='0' value={num} onChange={(e)=>setNum(parseInt(e.target.value))} />
        <button onClick={handleNumber}>Add</button>
      </div>
    </div>
  )
}

export default UseStateComponent