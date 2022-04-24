import React from 'react'
import './MyButton.css'

function MyButton(props){

    let {
        text,
        handleAction,
        colored
    } = props;

    return(
        <div className='btn-container'>
            <button onClick={handleAction} className={"btn-home " + (colored ? 'btn-blue' : 'btn-gray')}>{text}</button>
        </div>
    )
}

export default MyButton;