import React, { useState } from 'react'
import ChildFive from './ChildFive'

const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('world')

    const person = {
        firstName : 'James',
        lastName : 'Latham'
    }

    console.log("parent rendering")

    return (
        <div>
            <button onClick={() => setCount(c => c+1 )}>Click - {count}</button>
            <button onClick={() => setName('code')}>Change Name</button>
            <ChildFive name={name} fname={person.firstName} lname={person.lastName}/>
        </div>
    )
}

export default ParentFour