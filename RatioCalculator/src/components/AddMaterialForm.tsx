import React from 'react';

const AddMaterialForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 추가 로직
    onClose(); // 제출 후 모달 닫기
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        재료명:
        <input type="text" required />
      </label>
      <br/>
      <label>
        무게:
        <input type="text" required />
      </label>

      <table border={1}>
        <thead>
            <th>d</th><th>d</th>
        </thead>
        <tbody>
            <td>ds</td><td>sd</td>
        </tbody>

      </table>
      <button type="submit">Add Material</button>
    </form>
  );
};

export default AddMaterialForm;