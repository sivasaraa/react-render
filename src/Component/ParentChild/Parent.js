import React, { useState } from 'react'
import Child from './Child'

function Parent(){
    const [count, setCount] = useState(0)

    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setCount(0)}>Count to 0</button>
            <button onClick={() => setCount(5)}>Coun to 5</button>
            <Child />
        </div>
    )
}

export default Parent