import React, { useState } from 'react'
import { OptimizedChildTwo } from './ChildTwo'


const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Tech')
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Click - {count}</button>
            <button onClick={() => setName("AI")}>Change Name</button>
            <OptimizedChildTwo />
        </div>
    )
}

export default ParentTwo