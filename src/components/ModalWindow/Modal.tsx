import React, {FC} from 'react';
import Modal from 'react-modal';
import './index.css';

const ModalDialog= ({name, children,img,status}:any) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);


    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
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
                        inset:'0px'
                    },
                    overlay: {
                        display: 'flex',
                        backgroundColor: 'rgba(0, 0, 0, 0.40)',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 999,
                    },
                }}
                contentLabel="Example Modal"
            >
                <h2 className={"textColorYellow"}>{name}</h2>
                <div className={"blockFlex"}>
                <img src={img}/>
                    <div>
                <h3 className="textColorWhite">Status : {status}</h3>

                    </div>
                </div>
                <div className={"buttonStyle"}>
                    <button className="grayButton"  onClick={closeModal}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default ModalDialog
