import React from 'react';
import ReactModal from 'react-modal';
import AddListForm from './AddListForm';
import AddMaterialForm from './AddMaterialForm';

interface ModalProps {
  propText: string;
  isOpen: boolean;
  closeModal: () => void;
  formType: 'addList' | 'addMaterial' | null; // 여기에 formType 추가
}

const MyModal: React.FC<ModalProps> = ({ propText, isOpen, closeModal, formType }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Modal"
      ariaHideApp={false}
    >
      <h2>{propText}</h2>
      {formType === 'addList' ? (
        <AddListForm onClose={closeModal} />
      ) : (
        <AddMaterialForm onClose={closeModal} />
      )}
      <hr/>
      <button onClick={closeModal}>Close</button>
    </ReactModal>
  );
};

export default MyModal;
