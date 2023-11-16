import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
    const handelIncrement = () =>{
        setCount(count + 1)
    }
    const handelDecrement = () =>{
        setCount(count - 1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handelIncrement}>Increment</button>

        <button onClick={handelDecrement}>Decrement</button>
    </div>
  )
}

