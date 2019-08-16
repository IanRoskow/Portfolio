import React from 'react';

const ProjectList = (props) => {
    return (
        <div className='singleProject'>
            <img className='projectImage' src={props.project.image} alt={props.project.title}/>
            <div className='projectTitle'>{props.project.title}</div>
            <div className='projectDescription'>{props.project.description}</div>
        </div>
    );
}

export default ProjectList;