import React from 'react'

function SearchBox() {
  return (
    <div className="mt-2">
    <input
        type="search"
        className="border text-center w-full border-y-neutral-700 border-collapse border-solid h-9 py-5"
        placeholder="Search..."
    />
</div>
  )
}

export default SearchBox