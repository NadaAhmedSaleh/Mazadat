import React, { useState, createContext } from 'react'


export const AppStateContext = createContext()
export const AppStateProvider = props => {
    const [userId,setUserId]= useState('')
    const[loginIn,setLogin] = useState(false)

   
    return (
        <AppStateContext.Provider value={{userId,setUserId,loginIn,setLogin}}>
            {props.children}
        </AppStateContext.Provider>
    )
}