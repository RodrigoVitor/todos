import { createContext, useState } from "react";
import { v4 } from 'uuid'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    todos: [],
    complete: '',
    addTask: () => {},
    clickComplete: () => {},
    onDelete: () => {},
    isComplete: () => {}

})

const ThemeContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const [complete, setComplete] = useState('Todos')

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

    function onDelete(id) {
        const newTodos = todos.filter(todo => todo.id != id)
        setTodos(newTodos)
    }

    function isComplete(value) {
        setComplete(value)
    }

    return (
        <ThemeContext.Provider value={{todos, addTask, clickComplete, onDelete, complete, isComplete}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider