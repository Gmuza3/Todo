import "./style.css"
import { Todoform } from "./Todo-form"
import { Todolist } from "./Todo-list"

const Main =() =>{
    return(
        <div className="main-zone">
            <Todoform/>
            <Todolist/>
        </div>
    )
}

export default Main;