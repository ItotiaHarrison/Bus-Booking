import React, { useEffect } from 'react';
import Bus from './Bus';

function BusList({ buses, setBusList }) {
    useEffect(() => {
        fetch("http://localhost:3000")
            .then((res) => res.json())
            .then((data) => setBusList(data))
    }, []);

    const filteredBusList = buses.filter((bus) => bus.id)

    const busList = filteredBusList.map((bus) => {
        return <Bus
            buses={buses}
            setBusList={setBusList}
            key={bus.id}
            route={bus.route}
            type={bus.type}
            time={bus.time}
            fare={bus.fare}
        />
    })

    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        <h3>Route</h3>
                    </th>

                    <th>
                        <h3>Bus Type</h3>
                    </th>

                    <th>
                        <h3>Time</h3>
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