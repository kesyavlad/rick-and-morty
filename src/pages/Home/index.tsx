import React from 'react';
import './index.css';
import Person from '../../components/Person/Person';
import { Caracters } from '../../assets/infoCharacters/mainCharactersInfo';
import VideoCarousel from '../../components/VideoCarousel';

const Home = () => {
  const listPerson = Caracters.map((person) => (
    <Person titleName={person.name} textBody={person.text} img={person.image} />
  ));
  console.log(Caracters)
  return (
    <>
      <p className="styleText">
        The plot centers on a schoolboy named Morty and his grandfather Rick. Morty is a very
        ordinary boy, no different from his peers. His grandfather, on the other hand, is engaged in
        unusual scientific research and is often completely inadequate. He can grab his grandson at
        any time of the day or night and go on interdimensional adventures with him using a flying
        saucer built from various junk and capable of traveling through a time tunnel. Each time the
        pair find themselves in the most unexpected places and the most ridiculous situations.
      </p>
      <div className="flexElement">{listPerson}</div>
      <VideoCarousel />
    </>
  );
};

export default Home;
