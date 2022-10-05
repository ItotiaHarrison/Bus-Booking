import React, { useState } from 'react';

function Search() {
    const [currentLocation, setCurrentLocation] = useState("");
    const [destination, setDestination] = useState("");


    function handleLocation(event) {
        setCurrentLocation(event.target.value);
    }


    function handleDestination(event) {
        setDestination(event.target.value);
    }

    return (
        <div >
            <form>
                <div>
                    <input type="text" name={currentLocation} placeholder="Current location" onChange={handleLocation} />
                </div>
                <div>
                    <input type="text" name={destination} placeholder="Destination" onChange={handleDestination} />
                </div>
                <button>Available Buses</button>
            </form>

        </div>
    )
}

export default Search;