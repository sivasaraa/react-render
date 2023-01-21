import React, { useState } from 'react'

function UseState(){
    const[count, setCount] = useState(0)

    console.log("rendering")

    return (
        <div>
            <button onClick={() => setCount(c => c+1)}>Click - {count}</button>
        </div>
    )
}

export default UseState