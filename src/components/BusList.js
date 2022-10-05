import React, { useEffect } from 'react';

function BusList({ busList, setBusList }) {
    useEffect(() => {
        fetch("http://localhost:3000")
        .then((res) => res.json())
        .then((data) => setBusList(data))
    }, []);

    return (
        <div>BusList</div>
    )
}

export default BusList;