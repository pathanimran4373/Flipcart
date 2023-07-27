const Input = ({ handleChange, value,title, name, color }) => {
    return (
      <label className="my-5 flex items-center justify-start">
        <input class="form-radio w-5 h-5 border-2 rounded-full bg-red-500" onChange={handleChange} type="radio" value={value} name={name} />
        {/* <span className="" style={{ backgroundColor: color }}></span> */}
        <h2 className="ml-4 text-blue-600 hover:text-blue-900">{title}</h2>
      </label>
    );
  };
  
  export default Input;
  