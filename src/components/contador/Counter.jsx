import { useState } from 'react'
import Button from './Button'
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

  return (
    <div className="container-main">
        <main className="main">
            <h1 className='title'>Contador</h1>
            <div className="container-count">{count}</div>
            <Button name='Increment' fun={increment}/>
            <Button name='Decrement' fun={decrement}/>
        </main>
    </div>
    
  )
}

export default Counter