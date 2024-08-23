import "./style.css"
import { useTodos } from "../../Store"
import { useState } from "react"

export const Todoform = () =>{
    const {addItems} =useTodos()
    const [value,setValue] = useState("")
    const handelButton = (e) =>{
        e.preventDefault();
        if(value !== ""){
            addItems(value)
            setValue("")
        }
    }

    return(
        <div className="todo-form">
            <form action="">
                <input 
                type="text"
                value={value}
                onChange={(e) =>setValue(e.target.value)}
                />
                    <button 
                    type="submit"
                    onClick={handelButton}
                    onKeyDown={handelButton}
                    >Add task</button>
            </form>
            <div className="line"></div>
        </div>
    )
} 
