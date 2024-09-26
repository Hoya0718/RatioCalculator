import React, { useState } from 'react';
import MyModal from './components/MyModal';
import Title from './components/Title/Title'
import MyButton from './components/MyButton'
const App: React.FC = () => {
  const [modalType, setModalType] = useState<'addList' | 'addMaterial' | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (type: 'addList' | 'addMaterial') => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null); // Reset modal type when closing
  };

  return (
    <div>
      <header>
        <Title />
        <hr />
      </header>
      <section>
        {/* Content can go here, like a list of materials */}
      </section>
      <div style={{display: "flex", justifyContent : "center"}}>
        <button onClick={() => openModal('addList')}>Add List</button>
        <button onClick={() => openModal('addMaterial')}>Add Material</button>
      </div>
      <MyModal
        propText={modalType === 'addList' ? 'Add a New List' : 'Add a New Material'}
        isOpen={isOpen}
        closeModal={closeModal}
        formType={modalType} // modalType이 null일 수 있지만 허용하도록 변경
      />
    </div>
  );
};

export default App;
