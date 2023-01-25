import React from 'react'

export const ChildTwo = () => {
    console.log("child rendering")
    return (
        <div>
            Child Component
        </div>
    )
}

export const OptimizedChildTwo = React.memo(ChildTwo)