import React from 'react'

const Search = (props) => {
  return (
    <div className={`${props.width} wide column ui input searchform`}>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.searchTerm}
        placeholder={"Search by name of cocktail"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
