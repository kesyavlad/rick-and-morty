import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css"
// import { Link as NavLink } from "react-router-dom";
import {
    Pagination,
} from "@mui/material";
import {Charter} from "../../types/types";
import CardList from "../Card/CardList";
import Title from "../Title/Title";

const Сharacters = () => {

    const [charters, setCharstetrs] = useState<Charter[]>([]);
    const [page, setPage] = useState(1);
    const [pageTotal, setPageTotal] = useState(0)
    const [searchCustom, setSearch] = useState('')

    useEffect(()=>{
            axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchCustom}`).then(
                ({data}) => {
                    setCharstetrs(data.results);
                    setPageTotal(data.info.pages)
                }
            )

    },[page,searchCustom])



    return (
        <div>
            <Title serch={searchCustom} setSearch={setSearch} />
            <div className="flexElementCustom">
            {!!pageTotal && (
                <Pagination
                    count={pageTotal}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    showFirstButton
                    showLastButton
                />
            )}
            </div>
            <CardList users={charters} />
        </div>
    );
};

export default Сharacters;
