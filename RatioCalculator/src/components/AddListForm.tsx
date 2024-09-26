import React from 'react';

const AddListForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 추가 로직
    onClose(); // 제출 후 모달 닫기
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        List Name:
        <input type="text" required />
      </label>
      <button type="submit">Add List</button>
    </form>
  );
};

export default AddListForm;
