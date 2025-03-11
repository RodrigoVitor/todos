import { useContext, useState } from "react";
import CreateTask from "./components/CreateTask";
import Filter from "./components/Filter";
import InputComponent from "./components/InputComponent";
import Tasks from "./components/Tasks";
import { ThemeContext } from "./hook/CreateThemeContext";

export default function App () {
  const {todos, search, inputSearch, setInputSearch} = useContext(ThemeContext)
  // const [] = useState('')
  return (
    <div className="bg-[url('./assets/bg.jpeg')] min-h-175 bg-no-repeat bg-cover py-12">
      <div className="bg-gray-100 w-[50%] mx-auto rounded-md p-4">
        <h1 className="text-center text-stone-600 font-bold text-3xl">Lista de tarefas</h1>
        {/* Searching */}
        <div className="mb-4">
          <p className="text-2xl text-stone-600 font-bold mb-3">Pesquisar: </p>
          <InputComponent placeholder="Digite para pesquisar..." inputValue={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
          <button
            onClick={() => search(inputSearch)} 
            className="bg-blue-500 mt-4 px-2 rounded-md text-white font-bold text-[18px] cursor-pointer hover:bg-blue-400"
          >
            Pesquisar
          </button>
        </div>

        <hr />
        {/* Filter */}
        <Filter />

        <hr />
        {/* tasks */}
        {todos.length > 0 ? (
          <Tasks />
        ) : (
          <div>
            <p className="text-stone-600 font-bold text-3xl p-4">Você ainda não tem Nenhuma Tarefa</p>
          </div>
        )}
        

        <hr />
        {/* Create Tasks */}
        <CreateTask />
      </div>
    </div>
  )
}