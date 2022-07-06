import React, { FC } from 'react';
import { Charter } from '../../types/types';
import '../Card/style.css';
import Card from './Card';

interface CharsterListProps {
  users: Charter[];
}

const CardList: FC<CharsterListProps> = ({ users }) => {
  return (
    <div className="flexElement">
      {users.map((user) => (
        <Card key={user.id} charter={user} />
      ))}
    </div>
  );
};

export default CardList;
