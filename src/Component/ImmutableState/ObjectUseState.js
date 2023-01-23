import React, { useState } from 'react'

const initState = {
    firstName : 'Sam',
    lastName : 'Curran'
}

function ObjectUseState(){
    const [person, setPerson] = useState(initState)

    const changeName = () => {
        setPerson({...person,firstName:'Bruce',lastName:'Lee'})
    }

    console.log("rendering")
    return (
        <div>
            <button onClick={changeName}>{person.firstName} {person.lastName}</button>
        </div>
    )
}

export default ObjectUseState