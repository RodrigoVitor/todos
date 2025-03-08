import { createContext, useState } from "react";
import { v4 } from 'uuid'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    todos: [],
    addTask: () => {},
    clickComplete: () => {}

})

const ThemeContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    function addTask (title, category) {
        const newTodos = {
            id: v4(),
            title: title,
            category: category,
            isCompleted: false
        }
        return setTodos([...todos, newTodos])
    }

    const clickComplete = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          )
        );
    };

    return (
        <ThemeContext.Provider value={{todos, addTask, clickComplete}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider