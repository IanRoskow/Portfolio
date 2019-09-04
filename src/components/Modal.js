import React from 'react';
import ReactDOM from 'react-dom';

const closeModal = (clearState) => {
    document.querySelector("body").classList.remove("noScroll");
    clearState();
}

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => closeModal(props.callBack)} className='background'>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <div className='video'>
                    <video loop autoPlay>
                        <source src={props.video} type="video/mp4" />
                        <source src={props.video} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video> 
                </div>
                <div className='content'>
                    <h2 className='title'>{props.title}</h2>
                    <small className='description'>{props.summary}</small>
                    <small className='stack'>{props.stack}</small>
                    <div className='container'>
                        <button onClick={() => window.open(`${props.demo}`)}>Demo</button>
                        <button onClick={() => window.open(`${props.source}`)}>Source Code</button>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;