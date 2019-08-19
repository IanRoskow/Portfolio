import React from 'react';

const ProjectList = (props) => {
    return (
        <div>
            <div className='singleProject'>
                <img className='projectImage' src={props.project.image} alt={props.project.title}/>
                <div className='projectTitle'>{props.project.title}</div>
                <div className='projectDescription'>{props.project.description}</div>
                <button onClick={() => document.querySelector("body").classList.add("noScroll") }>Details</button>
            </div>
        </div>
    );
}

export default ProjectList;