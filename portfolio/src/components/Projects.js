import React from 'react';
import ProjectList from './ProjectList';

const projectMap = [
    {
        key: '1',
        title: 'My Portfolio',
        description: 'This is my portfolio.',
        image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/O3Egg9n/hacker-s-computer-screen_rxjqcfh4e_thumbnail-full01.png'
    },
    {
        key: '2',
        title: 'Streamy',
        description: 'This is my Streamy App.',
        image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/O3Egg9n/hacker-s-computer-screen_rxjqcfh4e_thumbnail-full01.png'
    },
    {
        key: '3',
        title: 'Pics Collection',
        description: 'This is an image library built with react.',
        image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/O3Egg9n/hacker-s-computer-screen_rxjqcfh4e_thumbnail-full01.png'
    }
]

const Projects = () => {
    const projects = projectMap.map((project) => {
        return <ProjectList key={project.title} project={project} />;
    })

    return (
        <div className="projects">
            <div className="myProjects">
                <h1>My Projects</h1>
                <div className='projectContainer'>
                    {projects}
                </div>
            </div>
        </div>
    )
}

export default Projects;