import React,{useState} from 'react';
import Search from './Search';

function Home(){
    const [search, setSearch] = useState("")


    return (
        <div>
            <h1>HOME</h1>
            <Search search={search} setSearch={setSearch} />
        </div>
    )
}

export default Home;