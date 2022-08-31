import React, {useState} from 'react'


const Use = () => {
    const [count, setCount] = useState(0);
    const increment =()=> {
        setCount(count + 1)
    }
    const decrement =()=> {
        setCount(count - 1)
    }
  return (
    <div>
        <h3>This is my counter Application</h3>
        <p>The Count Is:{count}</p>
        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default Use
