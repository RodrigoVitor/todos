export default function InputComponent ({placeholder, inputValue, onChange}) {
    return (
            <input 
                type="text" 
                placeholder={placeholder} 
                className="rounded p-1 bg-white w-full focus:outline-none"
                value={inputValue} 
                onChange={onChange}
            />
    )
}