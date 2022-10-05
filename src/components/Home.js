import React from 'react';
import Search from './Search';
import BusList from './BusList';

function Home() {
    
    return (
        <div className='home'>
            <Search />
            <BusList />
        </div>
    )
}

export default Home;