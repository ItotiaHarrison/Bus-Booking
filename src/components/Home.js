import React, { useState } from 'react';
import Search from './Search';
import BusList from './BusList';

function Home() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [buses, setBusList] = useState([]);


    return (
        <div className='home'>
            <Search from={from} setFrom={setFrom} to={to} setTo={setTo} />
            <BusList from={from} to={to} buses={buses} setBusList={setBusList} />
        </div>
    )
}

export default Home;