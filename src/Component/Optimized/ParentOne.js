import React, { useState } from 'react'
import ChildOne from './ChildOne';

function ParentOne(){
    const [count, setCount] = useState(0);
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Click - {count}</button>
            <ChildOne />
        </div>
    )
}

export default ParentOne