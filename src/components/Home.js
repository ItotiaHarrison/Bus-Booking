import React, { useState } from 'react';
import Search from './Search';
import BusList from './BusList';

function Home() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [availableBuses, setAvailableBuses] = useState([]);
    const [buses, setBusList] = useState([]);


    return (
        <div className='home'>
            <Search from={from} setFrom={setFrom} to={to} setTo={setTo} availableBuses={availableBuses} setAvailableBuses={setAvailableBuses} />
            <BusList buses={buses} setBusList={setBusList} availableBuses={availableBuses} setAvailableBuses={setAvailableBuses} />
        </div>
    )
}

export default Home;