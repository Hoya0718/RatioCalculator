import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties; // 추가 스타일 속성
}

const MyButton: React.FC<ButtonProps> = (
    {
        onClick,
        children,
        style
    }) => {

    return (
        <div>
            <button
                onClick={onClick}
                style={{color : "blue", backgroundColor : "white", ...style}}    
            >
                {children}
            </button>
        </div>
    )
}

export default MyButton;