import React from 'react';
import './index.css';
import ReactPlayer from 'react-player';
import { TrailerInfo } from '../../assets/videoTrailer/trailerInfo';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'nuka-carousel';

const VideoCarousel = () => {
  const slider = TrailerInfo.map((trailer) => {
    return (
      <div>
        <ReactPlayer url={trailer.src} pip={true} controls={true} width={'100%'} />
        <p style={{ color: 'white' }}>Trailer {trailer.title}</p>
      </div>
    );
  });
  return (
    <div>
      <Carousel>{slider}</Carousel>
    </div>
  );
};

export default VideoCarousel;
