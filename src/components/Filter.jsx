import { useContext, useState } from "react";
import { ThemeContext } from "../hook/CreateThemeContext";

export default function Filter() {
  const [selectedValue, SetSelectedValue] = useState('Todos')

  function handleChange(e) {
    isComplete(e.target.value)
    SetSelectedValue(e.target.value)
    
  }

  const {isComplete} = useContext(ThemeContext)
  return (
    <div className="mb-4">
      <p className="text-2xl text-stone-600 font-bold my-3">Filtros: </p>
      <small className="block text-stone-400 text-xl mb-3">Status:</small>
      <select value={selectedValue} onChange={(e) => handleChange(e)} className="focus:outline-none bg-white w-64 p-1">
        <option  value="Todos">Todos</option>
        <option  value="Completos">Completos</option>
        <option  value="Incompletos">Incompletos</option>
      </select>
    </div>
  );
}
