import React, { useEffect } from 'react';

function BusList({ busList, setBusList }) {
    useEffect(() => {
        fetch("http://localhost:3000")
        .then((res) => res.json())
        .then((data) => setBusList(data))
    }, []);


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
                </tr>
            </tbody>
        </table>
    )
}

export default BusList;