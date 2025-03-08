import { createContext, useState } from "react";
import { v4 } from 'uuid'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    todos: [],
    addTask: () => {}

})

const ThemeContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    function addTask (title, category) {
        const newTodos = {
            id: v4(),
            title: title,
            category: category
        }
        console.log(newTodos)
        return setTodos([...todos, newTodos])
    }

    return (
        <ThemeContext.Provider value={{todos, addTask}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider