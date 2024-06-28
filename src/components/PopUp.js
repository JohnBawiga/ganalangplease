// src/components/PopUp.js
import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #2f4d96;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  background: #FAC818
;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
`;

const PopUp = ({ imageSrc, onClose }) => {
  return (
    <Overlay>
      <Modal>
        <img src={imageSrc} alt="Pop-up" style={{ width: '100%', borderRadius: '10px' }} />
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Modal>
    </Overlay>
  );
};

export default PopUp;
