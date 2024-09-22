import React from 'react';

const PlusBtn: React.FC = () => {
    let i : number =0;
    const plusList = () => {
        console.log(i++);
    }
    return(
        <div>
            <input type='button' value='+ Add' onClick={plusList}></input>
        </div>  
    )
}

export default PlusBtn;