import React from 'react'

function Support() {
    function handleChange(event) {
        return event.target.value
    }

    return (
        <div className='support'>
            <form>
                <h3>How was your ride?</h3>
                <textarea name="message" onChange={handleChange} ></textarea>
            </form>


        </div>
    )
}

export default Support;