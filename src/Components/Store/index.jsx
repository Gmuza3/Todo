import { createContext, useContext, useState } from "react";

const TextContext = createContext();

export const ProviderContextApi =({children}) =>{
    const[list,setList] =useState([])
    const addTodoElements =(text) =>{
        setList((currentValue) =>{
          return [...currentValue,text]
        })
    }
    const removeTodoElements =(element) =>{
        setList(list.filter((item)=>item !==element))
    }
    return (
        <TextContext.Provider value={{
            list:list,
            addItems : addTodoElements,
            removeItems : removeTodoElements
        }}>
            {children}
        </TextContext.Provider>
    )
}

export const  useTodos = () =>useContext(TextContext)