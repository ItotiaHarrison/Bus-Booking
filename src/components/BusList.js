import React, { useEffect } from 'react';

function BusList({ from, to, buses, setBusList, book, setBook}) {

    useEffect(() => {
        fetch("https://itotiaharrison.github.io/Swift-booking-app/db.json")
            .then((res) => res.json())
            .then((data) => setBusList(data))
    }, [setBusList]);

    const filteredBusList = buses.filter((bus) => {
        return (from === "" ? bus : bus.from.includes(from))
    })
        .filter((bus) => {
            return (to === "" ? bus : bus.to.includes(to))

        })

    function handleBook() {
       setBook((book) => !book)
    }

    const busList = filteredBusList.map((bus) => {
        return (<tr key={bus.id}>
            <td>{bus.from}</td>
            <td>{bus.to}</td>
            <td>{bus.departure}</td>
            <td>{bus.fare}</td>
            <td><button onClick={handleBook}>
                {book ? "booked" : "book"}
                </button></td>
        </tr>
        )
    })

    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        <h3>From</h3>
                    </th>
                    <th>
                        <h3>To</h3>
                    </th>
                    <th>
                        <h3>Departure Time</h3>
                    </th>
                    <th>
                        <h3>Fare</h3>
                    </th>
                    <th>
                        <h3>Status</h3>
                    </th>
                </tr>
                {busList}
            </tbody>
        </table>
    );
};

export default BusList;