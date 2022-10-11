import React, { useState } from 'react';
import Search from './Search';
import BusList from './BusList';
import Iframe from 'react-iframe';



function Home() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [buses, setBusList] = useState([]);
    const [book, setBook] = useState(false);


    return (
        <div className='home'>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.327195666876!2d36.69556608641581!3d-1.2741579851305884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f194c21b18639%3A0x5ab7529167227f21!2sUthiru%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1665493286963!5m2!1sen!2ske"
                width="100%"
                height="300"
                styles={{height: "300px"}}
                loading="lazy"
                >

                </Iframe>

            <Search from={from} setFrom={setFrom} to={to} setTo={setTo} />
            <BusList from={from} to={to} buses={buses} setBusList={setBusList} book={book} setBook={setBook} />
        </div>
    )
}

export default Home;