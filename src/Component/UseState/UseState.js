import React, { useState } from 'react'

function UseState(){
    const[count, setCount] = useState(0)

    console.log("rendering")

    return (
        <div>
            <button onClick={() => setCount(c => c+1)}>Click - {count}</button>
            <button onClick={() => setCount(0)}>Click to 0</button>
            <button onClick={() => setCount(5)}>Click to 5</button>
        </div>
    )
}

export default UseState