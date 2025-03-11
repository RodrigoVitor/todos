import { useContext, useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import { ThemeContext } from "../hook/CreateThemeContext";

export default function CreateTask() {
  const [title, setTile] = useState('')
  const [category, setCategory] = useState('')
  const {addTask,todos} = useContext(ThemeContext)

  function handleChange (e) {
    setCategory(e.target.value)
  }
  function validation () {
    if(!title || title == '' && !category || category == "") {
      alert('Preenche todos os campos')
      return
    }
    addTask(title, category)
    setCategory('')
    setTile('')
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <p className="text-2xl text-stone-600 font-bold my-3">Criar tarefa: </p>
      <InputComponent placeholder="Digite o titulo" inputValue={title} onChange={(e) => setTile(e.target.value)} />
      <select name="categories" value={category} onChange={handleChange} className="focus:outline-none bg-white w-full mt-2 p-1">
        <option value="">Selecionar uma categoria</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudo">Estudo</option>
      </select>
      <button
        onClick={() => validation()} 
        className="bg-blue-500 mt-4 px-2 rounded-md text-white font-bold text-[18px] cursor-pointer hover:bg-blue-400"
      >
        Adicionar
      </button>
    </div>
  );
}
