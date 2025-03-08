export default function Filter() {
  return (
    <div className="mb-4">
      <p className="text-2xl text-stone-600 font-bold my-3">Filtros: </p>
      <small className="block text-stone-400 text-xl mb-3">Status:</small>
      <select className="focus:outline-none bg-white w-64 p-1">
        <option value="Todos">Todos</option>
        <option value="Completos">Completos</option>
        <option value="Incompletos">Incompletos</option>
      </select>
    </div>
  );
}
