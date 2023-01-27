import React from 'react'

const ChildFive = ({name, person}) => {
    console.log("child rendering")
    return (
        <div>
            {name} {person.firstName} {person.lastName}
        </div>
    )
}

export default React.memo(ChildFive)