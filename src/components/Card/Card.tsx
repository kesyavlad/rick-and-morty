import React, {FC} from 'react';
import "../Card/style.css"
import {Charter} from "../../types/types";
import More from '../../assets/images/more.png';

interface CardProps {
    charter : Charter
}

const Card: FC<CardProps> = ({charter}) => {
        return (
            <>
                <div className="card">
                    <img src={charter.image} className='imgLogo'/>
                    <div className="customText">
                        <h1 >{charter.name}</h1>
                        <p>Status: {charter.status}</p>
                        <p>Gender: {charter.gender}</p>
                        <img
                            src={More}
                            onClick={()=>{console.log("work")}}
                            style={{marginTop:"-10%"}}
                        />
                    </div>
                </div>

            </>
    );
};

export default Card;
