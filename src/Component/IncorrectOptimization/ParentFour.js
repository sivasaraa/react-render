import React, { useCallback, useMemo, useState } from 'react'
import ChildFive from './ChildFive'

const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('world')

    const person = {
        firstName : 'James',
        lastName : 'Latham'
    }

    const memoizedPerson = useMemo(() => person,[])

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick,[])

    console.log("parent rendering")

    return (
        <div>
            <button onClick={() => setCount(c => c+1 )}>Click - {count}</button>
            <button onClick={() => setName('code')}>Change Name</button>
            <ChildFive name={name} person={memoizedPerson} handleClick={memoizedHandleClick} />
        </div>
    )
}

export default ParentFour