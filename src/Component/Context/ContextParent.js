import React, { useState } from 'react'

export const parentContext = React.createContext()
const ContextProvider = parentContext.Provider

const ContextParent = ({children}) => {
    const [count, setCount] = useState(0)
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c=>c+1)}>Click - {count}</button>
            <ContextProvider value={count}>
                {children}
            </ContextProvider>
        </div>
    )
}

export default ContextParent