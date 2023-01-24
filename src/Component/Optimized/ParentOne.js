import React, { useState } from 'react'

function ParentOne(props){
    const [count, setCount] = useState(0);
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Click - {count}</button>
            {props.children}
        </div>
    )
}

export default ParentOne