import React from 'react';

function Search({ from, setFrom, to, setTo }) {

    function handleLocation(event) {
        setFrom(event.target.value);

    }


    function handleDestination(event) {
        setTo(event.target.value);
    }

    return (
        <div >
            <form>
                <div>
                    <input type="text" value={from} name={from} placeholder="Current location" onChange={handleLocation} />
                </div>
                <div>
                    <input type="text" value={to} name={to} placeholder="Destination" onChange={handleDestination} />
                </div>
            </form>

        </div>
    )
}

export default Search;