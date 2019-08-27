import React from 'react';
import ProjectList from './ProjectList';
import Modal from './Modal';

const projectMap = [
    {
        key: '1',
        title: 'My Portfolio',
        description: 'This is my portfolio.',
        source: "Git Hub",
        demo: "Demo",
        video: require('../assets/images/SongList.gif'),
        image: require('../assets/images/Test.JPG')
    },
    {
        key: '2',
        title: 'Streamy',
        description: 'This is my Streamy App.',
        source: "Git Hub",
        demo: "Demo",
        video: require('../assets/images/SongList.gif'),
        image: require('../assets/images/Test.JPG')
    },
    {
        key: '3',
        title: 'Pics Collection',
        description: 'This is an image library built with react.',
        source: "Git Hub",
        demo: "Demo",
        video: require('../assets/images/SongList.gif'),
        image: require('../assets/images/Test.JPG')
    }
]

class Projects extends React.Component {
    state = {
        title: "",
        description: "",
        source: "",
        demo: "",
        video: ""
    }


    getProjects() {
        const projects = projectMap.map((project) => {
            return <ProjectList key={project.title} project={project} callBack={this.updateState} />;
        })
        return projects;
    }

    updateState= ({title, description, source, demo, video}) => {
        this.setState({
            title,
            description,
            source,
            demo,
            video
        });
    }


    render() {
        return(
            <div className="projects main">
                <div className="myProjects">
                    <h1>My Projects</h1>
                    <div className='projectContainer'>
                        {this.getProjects()}
                    </div>
                </div>
                <Modal 
                    title={this.state.title}
                    description={this.state.description}
                    source={this.state.source}
                    demo={this.state.demo}
                    video={this.state.video}
                />
            </div>
        );
    }
}

// const Projects = () => {
//     const projects = projectMap.map((project) => {
//         return <ProjectList key={project.title} project={project} />;
//     })

//     return (
//         <div className="projects">
//             <div className="myProjects">
//                 <h1>My Projects</h1>
//                 <div className='projectContainer'>
//                     {projects}
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Projects;