import { createContext, useState } from "react";
import { v4 } from 'uuid'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    todos: [],
    complete: '',
    searchTodo: [],
    addTask: () => {},
    clickComplete: () => {},
    onDelete: () => {},
    isComplete: () => {},
    search: () => {}

})

const ThemeContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const [complete, setComplete] = useState('Todos')
    const [searchTodo, setSearchTodo] = useState([])

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

    function search (value) {
        const newTodos = todos.filter(todo => todo.title == value)
        setSearchTodo(newTodos)
        console.log(searchTodo)
    }

    return (
        <ThemeContext.Provider value={{searchTodo, todos, addTask, clickComplete, onDelete, complete, isComplete, search, }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider