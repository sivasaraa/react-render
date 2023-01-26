import React from 'react'
import Child from '../ParentChild/Child'

const ChildThree = () => {
    console.log("child rendering")
    return (
        <div>Child Component</div>
    )
}

export default React.memo(ChildThree)