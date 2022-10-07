import React, { useState } from 'react';
import Search from './Search';
import BusList from './BusList';

function Home() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [buses, setBusList] = useState([]);
    const [book, setBook] = useState(false);


    return (
        <div className='home'>
            <Search from={from} setFrom={setFrom} to={to} setTo={setTo} />
            <BusList from={from} to={to} buses={buses} setBusList={setBusList} book={book} setBook={setBook}/>
        </div>
    )
}

export default Home;