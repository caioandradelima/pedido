
import React, { useState } from 'react';
import './App.css';
import Modal from './componentes/Modal'; 

const MovableButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const sim = () => {
    openModal();
  };

  const moveButton = () => {
    const buttonWidth = 20; // Largura do botão
    const buttonHeight = 20; // Altura do botão
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Defina limites máximos para as coordenadas X e Y para evitar que o botão saia da tela
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    // Gere deslocamentos aleatórios entre 0 e 300 para cada direção
    const randomXOffset = Math.random() * 450; // Varia de 0 a 300
    const randomYOffset = Math.random() * 450; // Varia de 0 a 300

    // Calcule as coordenadas finais, limitando-as aos limites da tela
    const finalX = Math.max(0, Math.min(maxX, randomXOffset));
    const finalY = Math.max(0, Math.min(maxY, randomYOffset));

    setPosition({ x: finalX, y: finalY });
  };

  return (
    <div>
      <h1>Aceita namorar comigo ?</h1>
      <div className='button-container'>
        <button className='sim' onClick={sim}>Sim</button>
        <button className="movable-button"
          style={{ left: position.x, top: position.y }}
          onClick={moveButton}>
          Não
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default MovableButton;
