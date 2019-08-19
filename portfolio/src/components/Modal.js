import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => document.querySelector("body").classList.remove("noScroll")} className='background'>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <div className='video'>Project Title</div>
                <div className='content'>
                    <div className='title'>Project 1</div>
                    <div className='description'>This is the project description of how I did an awesome job with this project.</div>
                    <div className='conntainer'>
                        <button>Demo</button>
                        <button>Git Hub</button>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;