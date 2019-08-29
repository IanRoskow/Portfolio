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
        title: 'Todo',
        description: 'A jQuery todo list.',
        summary: 'A simple jQuery todo list created using ',
        stack: 'jQuery - Javascript - Bootstrap - CSS - HTML',
        source: "https://github.com/IanRoskow/Todo",
        demo: "https://ianroskow.github.io/Todo/",
        video: require('../assets/images/Todo.gif'),
        image: require('../assets/images/Todo.png')
    },
    {
        key: '3',
        title: 'Pics Collection',
        description: 'This is an image library built with react.',
        summary: 'This is an image library built with react using axios with the unsplash API. This is using redux with redux thunk.',
        stack: 'React - Axios - Javascript - Semantic UI - CSS - HTML',
        source: "https://github.com/IanRoskow/Pics",
        demo: "https://ianroskow.github.io/Pics/",
        video: require('../assets/images/SongList.gif'),
        image: require('../assets/images/Test.JPG')
    },
    {
        key: '4',
        title: 'Color Game',
        description: 'This is a simple game created with vanilla Javascript.',
        summary: 'This is a simple game created with vanilla Javascript.',
        stack: 'Javascript - CSS - HTML',
        source: "https://github.com/IanRoskow/rgbGame",
        demo: "https://ianroskow.github.io/rgbGame/",
        video: require('../assets/images/SongList.gif'),
        image: require('../assets/images/rgbGame.png')
    }
]

class Projects extends React.Component {
    state = {
        title: "",
        description: "",
        summary: "",
        stack: "",
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

    updateState= ({title, description, summary, stack, source, demo, video}) => {
        this.setState({
            title,
            description,
            summary,
            stack,
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
                    summary={this.state.summary}
                    stack={this.state.stack}
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