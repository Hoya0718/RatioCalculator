import React from 'react';

const AddMaterialForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 추가 로직
        onClose(); // 제출 후 모달 닫기
    };

    return (
        <div>
            <table border={1}>
                <tbody>
                    <td>재료명</td><td>   <input type="text" required /></td>
                    <td>무게</td><td>   <input type="text" required /></td>
                    <td><button type="button">재료 추가</button></td>
                </tbody>
            </table>
        </div>
    );
};

export default AddMaterialForm;