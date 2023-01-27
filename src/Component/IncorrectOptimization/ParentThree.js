import React, { useState } from 'react'
import ChildFour from './ChildFour'
import ChildThree from './ChildThree'

const ParentThree = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('world')
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Click - {count}</button>
            <button onClick={() => setName("code")}>Change Name</button>
            <ChildFour name={name} />
            {/* <ChildThree name={name}>
                <strong>Hello</strong>
            </ChildThree> */}
        </div>
    )
}

export default ParentThree