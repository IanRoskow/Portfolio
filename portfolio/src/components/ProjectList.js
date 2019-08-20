import React from 'react';

const updateModal = (props) => {
    document.querySelector("body").classList.add("noScroll");
    console.log(props.project);
    console.log(props.callBack)
    props.callBack(props.project);
}

const ProjectList = (props) => {
    return (
        <div>

            <div className='singleProject'>
                <img className='projectImage' src={props.project.image} alt={props.project.title}/>
                <div className='projectTitle'>{props.project.title}</div>
                <small className='projectDescription'>{props.project.description}</small>
                <button onClick={() => updateModal(props) }>Details</button>
            </div>
        </div>
    );
}

export default ProjectList;