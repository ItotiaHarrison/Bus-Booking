import React, { useState } from 'react';
import Search from './Search';
import BusList from './BusList';

function Home() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);


    return (
        <div>
            <h1>HOME</h1>
            <Search search={search} setSearch={setSearch} />
            <BusList busList={list} setBusList={setList} />
        </div>
    )
}

export default Home;