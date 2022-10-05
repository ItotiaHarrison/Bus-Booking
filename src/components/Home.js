import React, { useState } from 'react';
import Search from './Search';
import BusList from './BusList';

function Home() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);


    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <BusList buses={list} setBusList={setList} />
        </div>
    )
}

export default Home;