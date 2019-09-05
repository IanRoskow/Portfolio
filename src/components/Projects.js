import React from 'react';
import ProjectList from './ProjectList';
import Modal from './Modal';

const projectMap = [
    {
        key: '1',
        title: 'My Portfolio Site',
        description: 'My portfolio site built with ReactJS and simple CSS.',
        summary: "My portfolio site to show case my work and side projects. I built this using ReactJS and hosting it on Git Hub. I designed this site myself and decided not to use a css framework to keep the site light. I hope you enjoy it.",
        stack: "ReactJS - CSS3 - HTML",
        source: "https://github.com/IanRoskow/Portfolio",
        demo: "https://ianroskow.github.io/Portfolio/",
        video: require('../assets/images/Portfolio.mp4'),
        image: require('../assets/images/Portfolio.png')
    },
    {
        key: '2',
        title: 'Todo',
        description: 'An elegant jQuery todo list.',
        summary: 'A simple jQuery todo list created using the jQuery Library, CSS3, and HTMl. This project was to experiment with simple Dom manipulation using the jQuery library. This todo list can add, mark finished, and delete items, it also is mobile responsive. This was a simple coding task in a Udemy course I took, The Web Developer Bootcamp.',
        stack: 'jQuery - Javascript - CSS3 - Font Awesome - HTML5',
        source: "https://github.com/IanRoskow/Todo",
        demo: "https://ianroskow.github.io/Todo/",
        video: require('../assets/images/Todo.mp4'),
        image: require('../assets/images/Todo.png')
    },
    {
        key: '3',
        title: 'Pics Collection',
        description: 'A beautiful stock image finder built with ReactJS.',
        summary: 'A beautiful stock image search web application. This image library was built to experiment with calling APIs using axios within a React component. A search term is sent to the Unsplash API and returns 30 images that match that term. This application then arranges them into a beautiful grid that was created using CSS3. This was an assignment in a udemy course, Modern React with Redux.',
        stack: 'ReactJS - Axios - Javascript - Semantic UI - CSS - HTML',
        source: "https://github.com/IanRoskow/Pics",
        demo: "https://ianroskow.github.io/Pics/",
        video: require("../assets/images/Pics.mp4"),
        image: require('../assets/images/Pics.png')
    },
    {
        key: '4',
        title: 'RGB Color Game',
        description: 'A simple game to test your RGB color knowledge.',
        summary: 'This is a simple game created with vanilla Javascript and CSS3. It has two different modes of play easy and hard, and can be reset at any point. This project was used to demonstrate ability to edit dom objects based on user interaction. This was a simple coding task in a Udemy course I took, The Web Developer Bootcamp.   ',
        stack: 'Javascript - CSS - HTML',
        source: "https://github.com/IanRoskow/rgbGame",
        demo: "https://ianroskow.github.io/rgbGame/",
        video: require('../assets/images/rgbGame.mp4'),
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