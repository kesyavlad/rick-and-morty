import React, { FC } from 'react';
import '../Card/style.css';
import { Charter } from '../../types/types';
import More from '../../assets/images/more.png';
import ModalDialog from '../ModalWindow/Modal';

interface CardProps {
  charter: Charter;
}

const Card: FC<CardProps> = ({ charter }) => {
  return (
    <>
      <div className="card">
        <img src={charter.image} className="imgLogo" />
        <div className="customText">
          <h1>{charter.name}</h1>
          <p>Status: {charter.status}</p>
          <p>Gender: {charter.gender}</p>
          <ModalDialog
            name={charter.name}
            img={charter.image}
            status={charter.status}
            episodes={charter.episode}>
            <img src={More} className="styleMore" alt="moreButton" />
          </ModalDialog>
        </div>
      </div>
    </>
  );
};

export default Card;
