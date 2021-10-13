import react, { createContext, useContext, useReducer } from 'react'

//create data layer which holds data

export const StateContext = createContext();

//state provider

export const StateProvider = ({reducer,initialState,children})=>(


   <StateContext.Provider value={useReducer(reducer,initialState)}>
             {children}
   </StateContext.Provider>

)


export const useStateValue =()=> useContext(StateContext)