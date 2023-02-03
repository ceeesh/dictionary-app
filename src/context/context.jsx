import React, { useState, createContext } from 'react'

export let InputContext = createContext({})

export const ContextProvider = ({ children }) => {
    const [value, setValue] = useState("");

    const [inputValue, setInputValue] = useState("");

    return (
        <InputContext.Provider value={{
            value,
            setValue,
            inputValue, 
            setInputValue
        }}>
            {children}
        </InputContext.Provider>
    )
}

