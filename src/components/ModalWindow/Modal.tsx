import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './index.css';
import axios from 'axios';

const ModalDialog = ({ name, children, img, status, episodes }: any) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [allEpisodes, setAllEpisodes] = useState([] as string[]);

  const episodesIds = episodes.map((link: string) => link.split('/')[5]);
  useEffect(() => {
    if (modalIsOpen) {
      axios
        .get(`https://rickandmortyapi.com/api/episode/${episodesIds.join(',')}`)
        .then((res: any) => {
          if (Array.isArray(res.data)) {
            const eps = res.data.map((ep: any) => ep.episode + ' ' + ep.name);
            setAllEpisodes([...eps]);
          } else {
            const season = res.data.episode + ' ' + res.data.name;
            setAllEpisodes([season]);
          }
        });
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const listItems = allEpisodes.map((name: string) => <li key={name}>{name}</li>);
  return (
    <div>
      <div onClick={openModal}>{children}</div>
      <Modal
        appElement={document.getElementById('root') || undefined}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            position: 'relative',
            background: '#292a2f',
            width: 600,
            height: 500,
            overflow: 'auto',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            boxShadow: '4px 4px 4px #111111',
            border: '0px',
            inset: '0px'
          },
          overlay: {
            display: 'flex',
            backgroundColor: 'rgba(0, 0, 0, 0.40)',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            overflowX: 'auto',
            zIndex: 999
          }
        }}
        contentLabel="Example Modal">
        <h2 className={'textColorYellow'}>{name}</h2>
        <div className={'blockFlex'}>
          <img src={img} alt="Characters" />
          <div>
            <h3 className="textColorWhite">Status : {status}</h3>
            <h3 className="textColorWhite">Episodes:</h3>
            <ul className="styleEpisode">{listItems}</ul>
          </div>
        </div>
        <div className={'buttonStyle'}>
          <button className="grayButton" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDialog;
