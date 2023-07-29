import React from 'react'

const SearchItem = ({handleInputChange,query}) => {
  return (
    <>
      <div className="w-10/12 h-50 p-3 border-2 rounded-md border-indigo-600 ">
        <input
          className="w-full h-full border-none outline-none"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your product...."
        />
      </div>
    </>
  )
}

export default SearchItem
