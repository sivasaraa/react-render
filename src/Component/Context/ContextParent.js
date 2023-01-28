import React, { useState } from 'react'
import { MemoChildA } from './ContextChildren'

export const parentContext = React.createContext()
const ContextProvider = parentContext.Provider

const ContextParent = () => {
    const [count, setCount] = useState(0)
    console.log("parent rendering")
    return (
        <div>
            <button onClick={() => setCount(c=>c+1)}>Click - {count}</button>
            <ContextProvider value={count}>
                <MemoChildA />
            </ContextProvider>
        </div>
    )
}

export default ContextParent