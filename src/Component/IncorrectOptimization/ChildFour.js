import React from 'react'

const ChildFour = ({name}) => {
    console.log("child rendering")
    const date = new Date()
    return (
        <div>
            Hello - {name} It's now {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
        </div>
    )
}

export default React.memo(ChildFour)