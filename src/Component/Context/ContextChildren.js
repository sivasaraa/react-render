import React, { useContext } from 'react'
import { parentContext } from './ContextParent'

export const ChildA = () => {
    console.log("child A rendering")
    return (
        <>
        <div>Child A</div>
        <ChildB />
        </>
    )
}

//export const MemoChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log("child B rendering")
    return (
        <>
        <div>Child B</div>
        <ChildC />
        </>
        
    )
}

export const ChildC = () => {
    const count = useContext(parentContext)
    console.log("child C rendering")
    return (
        <div>Child C Count - {count}</div>
    )
}