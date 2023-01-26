import React from 'react'

const ChildThree = (props) => {
    console.log("child rendering")
    return (
            <div>{props.children} - {props.name}</div>    
    )
}

export default React.memo(ChildThree)