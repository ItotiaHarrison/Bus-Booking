import React from 'react';

function Search({search, setSearch}){
    function handleSearch(event){
        setSearch(event.target.value);
    }

  return (
    <div className="ui large fluid icon input">
    <input type="text" name={search} placeholder="Search" onChange={handleSearch}/>
    </div>
  )
}

export default Search;