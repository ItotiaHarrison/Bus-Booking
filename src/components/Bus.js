import React from 'react'

function Bus({ from, to, departure, fare, id, buses, setBusList }) {

    function handleBooking(event) {
        const newStatus = buses.filter((bus) => {
            return bus.id !== id
        })


        fetch("http://localhost:3000/buses", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ newStatus })
        })
            .then((res) => res.json())
    }

    return (
        <div>
            <tr>
                <td>{from}</td>
                <td>{to}</td>
                <td>{departure}</td>
                <td>{fare}</td>
                <td><button onClick={handleBooking}>Book</button></td>
            </tr>
        </div>
    );
}

export default Bus;