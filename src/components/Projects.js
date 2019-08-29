import React from 'react';
import ProjectList from './ProjectList';
import Modal from './Modal';

const projectMap = [
    {
        key: '1',
        title: 'My Portfolio',
        description: 'My portfolio site built with ReactJS, and CSS3.',
        summary: "My portfolio site to show case my work and side projects. I built this using React and am simply hosting it on Git Hub since there is no backend neccesary. I designed this site myself and decided not to use a css framework to keep the site light. I hope you enjoy it.",
        stack: "ReactJS - CSS3 - HTML",
        source: "https://github.com/IanRoskow/Portfolio",
        demo: "https://ianroskow.github.io/Portfolio/",
        video: require('../assets/images/Todo.gif'),
        image: require('../assets/images/Portfolio.png')
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
        video: require('../assets/images/Pics.gif'),
        image: require('../assets/images/Pics.png')
    },
    {
        key: '4',
        title: 'Color Game',
        description: 'This is a simple game created with vanilla Javascript.',
        summary: 'This is a simple game created with vanilla Javascript.',
        stack: 'Javascript - CSS - HTML',
        source: "https://github.com/IanRoskow/rgbGame",
        demo: "https://ianroskow.github.io/rgbGame/",
        video: require('../assets/images/rgbGame.gif'),
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

    updateState = ({title, description, summary, stack, source, demo, video}) => {
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

    clearState = () => {
        this.setState({
            title: "",
            description: "",
            summary: "",
            stack: "",
            source: "",
            demo: "",
            video: ""
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
                    callBack={this.clearState}
                />
            </div>
        );
    }
}

export default Projects;