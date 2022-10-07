import React from 'react';

function Search({from, setFrom, to, setTo, availableBuses, setAvailableBuses}) {
    
    function handleLocation(event) {
        setFrom(event.target.value);
    }


    function handleDestination(event) {
        setTo(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setAvailableBuses(event.target.value);
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name={from} placeholder="Current location" onChange={handleLocation} />
                </div>
                <div>
                    <input type="text" name={to} placeholder="Destination" onChange={handleDestination} />
                </div>
                <button>Available Buses</button>
            </form>

        </div>
    )
}

export default Search;