import React from 'react';
import ProjectList from './Project';
import { Container, SectionHeader } from '../GlobalsStyledComponents';

const projectMap = [
  {
    key: '1',
    title: 'My Portfolio Site',
    summary:
      'The site you are currently on, my portfolio site to show case my work and side projects. I built this using React and Styled Components. I am hosting it using Gatsby to ensure I have solid SEO. I hope you enjoy it.',
    stack: 'React - Styled Components - Gatsby',
    source: 'https://github.com/IanRoskow/Portfolio',
    demo: 'https://ianroskow.com',
    image: require('../../assets/images/Portfolio.png')
  },
  {
    key: '2',
    title: 'Netflix Search',
    summary:
      'Did you know that Netflix streams different content in different countries? This side project searches the global Netflix repository based on a search term or a genre, and returns information on where that movie/show is streaming. I built this application using React, Styled Components, Axios, and using Rapid API. The design was inspired by the Netflix current style guide. I am very proud of this project because it started as an idea and now is a full application. ',
    stack: 'React - React Hooks - Styled Components - Axios',
    source: 'https://github.com/IanRoskow/netflix-search',
    demo: 'https://netflixsearch.netlify.com',
    image: require('../../assets/images/Netflix.png')
  },
  {
    key: '3',
    title: 'Quality Improvement',
    summary:
      'My team of 4 created a quality management system where manufacturing instructions could be accesible and risk management processes could be managed for a top explosives manufacturing company. My role on this project as lead front-end developer was to decide on our front-end technologies, implement a code management structure, design web mockups, and devlop dynamic web pages. As a lead I had to manage the client relationship, lead demos, and was the subject matter expert for any front end development questions.',
    stack: 'jQuery - Javascript - CSS3 - HTML5 - SharePoint - Agile',
    disclaimer:
      'Due to client confidentiality I can not share the source code for this project.',
    image: require('../../assets/images/QualityProject.png')
  },
  {
    key: '4',
    title: 'Content Sharing Project',
    summary:
      "My team of 5 created this content sharing platform over a course of 2 years for a fortune 500 oil and gas company. My role on this project as front-end developer was to create dynamic web pages based on photoshop designs. My responsibilities did not stop at front end developement, becasue of our small team I also worked on CRUD operations, analytics, database management, third party platform integrations, and UX/UI design. Our team exceeded the client's expectations and was given continuation work based on our success of this project.",
    stack:
      'jQuery - Javascript - Bootstrap - CSS3 - HTML5 - SharePoint - SQL - Google Analytics - Adobe Suite - Agile',
    disclaimer:
      'Due to client confidentiality I can not share the source code for this project.',
    image: require('../../assets/images/ContentProject.png')
  }
];

const Projects = () => {
  const projects = projectMap.map(project => (
    <ProjectList key={project.key} project={project} />
  ));
  return (
    <Container>
      <SectionHeader>My Projects</SectionHeader>
      {projects}
    </Container>
  );
};

export default Projects;
