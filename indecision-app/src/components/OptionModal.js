import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option" 
      onRequestClose={props.clearSelectedOption}  // for clearing the modal when user presses Esc or when background is clicked
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button 
        onClick={props.clearSelectedOption}
      >
        Okay
      </button>
    </Modal>
);

export default OptionModal;