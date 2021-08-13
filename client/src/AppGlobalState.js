import React, { useState, createContext } from 'react'


export const AppStateContext = createContext()
export const AppStateProvider = props => {
    const [userId,setUserId]= useState("nada123")

   
    return (
        <AppStateContext.Provider value={{userId,setUserId}}>
            {props.children}
        </AppStateContext.Provider>
    )
}