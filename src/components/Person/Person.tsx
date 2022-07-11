import React, { FC } from 'react';
import './index.css';

interface fildPersone {
  titleName: string;
  textBody: string;
  img?: string;
}

const Person: FC<fildPersone> = ({ img, titleName, textBody }) => {
  return (
    <div className="flexAbout">
      <img src={img} style={{ position: 'relative', width: '50%' }} alt="person" />
      <div className="styleAbout">
        <h1>{titleName}</h1>
        <p className="textBlock">{textBody}</p>
      </div>
    </div>
  );
};

export default Person;
