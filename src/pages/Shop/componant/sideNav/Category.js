import Input from "./Input"

const Category = ({ handleChange }) => {
 
  return (
    <div>
      <h2 className="text-2xl">Category</h2>

      <div className="flex flex-col">
        <label className="my-5 flex items-center justify-start">
          <input class="form-radio w-5 h-5 border-2 rounded-full bg-red-500" onChange={handleChange} type="radio" value="" name="test" />
          <h2 className="ml-4 text-blue-600 hover:text-blue-900">All</h2>
        </label>
        <Input
          handleChange={handleChange}
          value="clothes"
          title="Clothes"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="electronics"
          title="Electronics"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="mobile"
          title="Mobile and accessories"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="other"
          title="Other"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
