import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => document.querySelector("#modal").style.display = "none"} className='background'>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <div className='header'>Project Title</div>
                <div className='content'>This is the project details.</div>
                <div className='actions'>THis is the options</div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;