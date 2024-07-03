import React from 'react'

const Options = ({name, updateItemCount}) => {
  console.log(name)
  return (
    <form>
      <input type='checkbox' id={`${name} option`}
      onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}></input>{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  )
}

export default Options