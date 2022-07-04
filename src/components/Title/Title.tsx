import React from 'react';
import './index.css';

const Title = ({ search, setSearch }: any) => {
  return (
    <>
      <div className="text">
        <h1 className="titleText">Rick and Morty</h1>
        <input
          placeholder="Search characters"
          className="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Title;
