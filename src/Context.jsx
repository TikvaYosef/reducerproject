import React,{ createContext,useReducer } from "react";
import { MessageReducer } from "./Reducers/MessageReducer"; 



export const msContext = createContext();

export const Msprovider = ({children}) => { 
    const [massage, dispatch] = useReducer(MessageReducer, {isOpen: false});
    
    return(
        <msContext.Provider value = {{massage,dispatch}}>
            {children}
        </msContext.Provider>
    )

}