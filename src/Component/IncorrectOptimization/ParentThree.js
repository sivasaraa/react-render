import React, { useState } from 'react'
import ChildThree from './ChildThree'

const ParentThree = () => {
    const [count, setCount] = useState(0)
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Click</button>
            <ChildThree />
        </div>
    )
}

export default ParentThree