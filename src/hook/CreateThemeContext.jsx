import { createContext, useState } from "react";
import { v4 } from 'uuid'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    todos: [],
    complete: '',
    searchTodo: [],
    inputSearch: '',
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
    const [inputSearch, setInputSearch] = useState('')

    function addTask (title, category) {
        const newTodos = {
            id: v4(),
            title: title.toLowerCase(),
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
        setSearchTodo([])
        setInputSearch('')

        setComplete(value)
    }

    function search (value) {
        const newTodos = todos.filter(todo => todo.title == value.toLowerCase())
        if(newTodos.length < 1) {
            alert('Não encontrado! \nPesquise pelo nome completo da tarefa')
            return
        }
        setSearchTodo(newTodos)
    }

    return (
        <ThemeContext.Provider value={{ inputSearch, searchTodo, todos, addTask, setInputSearch, clickComplete, onDelete, complete, isComplete, search, }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider