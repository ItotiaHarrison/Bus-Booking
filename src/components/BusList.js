import React, { useState, useEffect } from 'react';
import Bus from './Bus';

function BusList() {
    const [buses, setBusList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/buses")
            .then((res) => res.json())
            .then((data) => setBusList(data))
    }, [setBusList]);

    const filteredBusList = buses.filter((bus) => bus.id)

    const busList = filteredBusList.map((bus) => {
        return <Bus
            buses={buses}
            setBusList={setBusList}
            key={bus.id}
            from={bus.from}
            to={bus.to}
            type={bus.type}
            departure={bus.departure}
            fare={bus.fare}
        />
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
                        <h3>Bus Type</h3>
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
    )
}

export default BusList;