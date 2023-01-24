import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

function GrandParent(){
    const [gcount, setgCount] = useState(0)
    return (
        <div>
            <button onClick={() => setgCount(c => c + 1)}>GrandParent Count - {gcount}</button>
            <ParentOne count={gcount}>
                <ChildOne />
            </ParentOne>
        </div>
    )
}

export default GrandParent