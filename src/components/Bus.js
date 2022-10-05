import React from 'react'

function Bus({ from, to, type, departure, fare }) {

    function handleBooking(event) {
        const newStatus = event.target.value


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
                <td>{type}</td>
                <td>{departure}</td>
                <td>{fare}</td>
                <td><button onClick={handleBooking}>Book</button></td>
            </tr>
        </div>
    );
}

export default Bus;