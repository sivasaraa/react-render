import React from 'react'

const ChildFive = ({person}) => {
    console.log("child rendering")
    return (
        <div>
            {person.firstName} {person.lastName}
        </div>
    )
}

export default React.memo(ChildFive)