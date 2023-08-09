import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (<div>
    <h2>Agora só falta você me pedir em namoro ? <br/>
    TE AMO
    </h2>
    <div className="modal">
        <span className="close" onClick={onClose}>&times;</span>
        
      <div className="modal-content">
      </div>
    </div>
    </div>
  );
};

export default Modal;
