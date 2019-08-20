import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => document.querySelector("body").classList.remove("noScroll")} className='background'>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <div className='video'>
                    <img src={props.video} />
                </div>
                <div className='content'>
                    <h2 className='title'>{props.title}</h2>
                    <p className='description'>{props.description}</p>
                    <div className='container'>
                        <button >{props.demo}</button>
                        <button>{props.source}</button>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;