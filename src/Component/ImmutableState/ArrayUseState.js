import React, { useState } from 'react'

const name = ['Bruce','Adam']

function ArrayUseState() {

    const addName = () => {
        setPerson([...persons,"williams","jason"])
    }

    console.log("rendering")
    const [persons, setPerson] = useState(name);
    return (
        <div>
            <button onClick={addName}>Add Name</button>
            {
                persons.map(person => <div key={person}>{person}</div>)
            }
        </div>
    )
}

export default ArrayUseState;