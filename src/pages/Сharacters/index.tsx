import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.css';
import { Pagination } from '@mui/material';
import { Charter } from '../../types/types';
import CardList from '../../components/Card/CardList';
import Title from '../../components/Title/Title';
import { useSearchParams } from 'react-router-dom';

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [charters, setCharacters] = useState<Charter[]>([]);
  const [page, setPage] = useState(searchParams.get('page') || '1');
  const [pageTotal, setPageTotal] = useState(0);
  const [searchCustom, setSearch] = useState(searchParams.get('searchCustom') || '');
  const getData = (pageNumber: string, search: string) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)
      .then(({ data }) => {
        setCharacters(data.results);
        setPageTotal(data.info.pages);
      })
      .catch(() => {
        setCharacters([]);
        setPageTotal(0);
      });
  };

  useEffect(() => {
    setSearchParams({ page: '1', searchCustom });
    getData('1', searchCustom);
    setPage('1');
  }, [searchCustom]);

  useEffect(() => {
    setSearchParams({ page, searchCustom });
    getData(page, searchCustom);
  }, [page]);

  return (
    <div>
      <Title search={searchCustom} setSearch={setSearch} />
      <div className="flexElementCustom">
        {!!pageTotal && (
          <Pagination
            count={pageTotal}
            page={+page}
            onChange={(_, num) => setPage(num.toString())}
            showFirstButton
            showLastButton
          />
        )}
      </div>
      {charters.length ? <CardList users={charters} /> : <div className="noResult">No results</div>}
    </div>
  );
};

export default Index;
