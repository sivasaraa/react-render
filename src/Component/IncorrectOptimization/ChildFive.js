import React from 'react'

const ChildFive = ({name, fname, lname}) => {
    console.log("child rendering")
    return (
        <div>
            {name} {fname} {lname}
        </div>
    )
}

export default React.memo(ChildFive)