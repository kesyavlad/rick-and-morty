import React from 'react';
import './index.css';
import ReactPlayer from 'react-player';
import { TrailerInfo } from '../../assets/videoTrailer/trailerInfo';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const VideoCarousel = () => {
  const slider = TrailerInfo.map((trailer) => {
    return (
      <>
        <ReactPlayer url={trailer.src} pip={true} controls={true} />
        <p style={{ color: 'white' }}>Trailer {trailer.title}</p>
      </>
    );
  });
  return (
    <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <AliceCarousel autoWidth mouseTracking items={slider} controlsStrategy="alternate" />
    </div>
  );
};

export default VideoCarousel;
