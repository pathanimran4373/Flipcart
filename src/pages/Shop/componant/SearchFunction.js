import React from 'react'

const SearchItem = ({handleInputChange,query}) => {
  return (
    <>
        <input
          className="w-full h-30 p-3 border-none shadow-xl outline-none"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your product...."
        />
    </>
  )
}

export default SearchItem
