import React from 'react';

const AddListForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 추가 로직
    onClose(); // 제출 후 모달 닫기
  };

  return (
    <table border={1}>
                <tbody>
                    <td>리스트 명</td><td>   <input type="text" required /></td>
                    <td><button type="button">리스트 추가</button></td>
                </tbody>
            </table>
  );
};

export default AddListForm;
