import React from 'react';
import './index.css';

const Search = ({ search, setSearch }: any) => {
  return (
    <>
      <div className="text">
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

export default Search;
