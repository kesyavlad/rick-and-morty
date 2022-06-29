import React from 'react';
import './index.css'

const Title = ({search, setSearch
}: any  ) => {

    return (
        <>
            <div className='text'>
            <h1 style={{marginLeft:"auto", marginRight:'auto', width:'7em',paddingTop:0}}>Rick and Morty</h1>
            <input placeholder="Search...." className="search" value={search} onChange={(e)=> {
                setSearch(e.target.value)
            }}/>
            </div>
        </>
    );
};

export default Title;
