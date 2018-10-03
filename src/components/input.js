import React from 'react';

 const Input = (title, state, onChange) => {
    return (
        <div className="input">
            <input name={title} value={state} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}
 export default Input; 