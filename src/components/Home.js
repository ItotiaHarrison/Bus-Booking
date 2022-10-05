import React, { useState } from 'react';
import Search from './Search';
import BusList from './BusList';

function Home() {
    const [list, setList] = useState([]);


    return (
        <div className='home'>
            <Search  />
            <BusList buses={list} setBusList={setList} />
        </div>
    )
}

export default Home;