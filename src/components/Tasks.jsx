import { useContext } from "react"
import { ThemeContext } from "../hook/CreateThemeContext"

export default function Tasks() {
    const {todos, clickComplete} = useContext(ThemeContext)
    return (
        <div className="flex flex-col gap-4 mb-4">
        {todos.map((todo) => (
            <div key={todo.id} 
                className={`flex justify-between items-center bg-white p-2 mt-4 rounded-md`}
            >
                <div>
                    <p className={`text-stone-500 font-bold ${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</p>
                    <small className={`text-stone-500 ${todo.isCompleted ? 'line-through' : ''}`}>({todo.category})</small>
                    </div>
                    <div className="flex gap-3">
                    <button 
                        className="bg-green-500 px-2 rounded-md text-white font-bold text-[18px] cursor-pointer hover:bg-green-400"
                        onClick={() => clickComplete(todo.id)}
                    >
                        Completar
                    </button>
                    <button className="bg-red-500 text-white px-2 rounded-md cursor-pointer hover:bg-red-400">X</button>
                </div>
            </div>
        ))}
          
        </div>
    )
}