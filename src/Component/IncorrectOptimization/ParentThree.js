import React, { useState } from 'react'
import ChildThree from './ChildThree'

const ParentThree = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('world')
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Click - {count}</button>
            <button onClick={() => setName("code")}>Change Name</button>
            <ChildThree />
        </div>
    )
}

export default ParentThree