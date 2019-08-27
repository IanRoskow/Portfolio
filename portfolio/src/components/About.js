import React from 'react';

const About = () => {
    return (
        <div className='about main'>
            <div className='aboutMe aboutContainer'>
                <h1>About Me</h1>
                <p>Ian is a technology consultant who delivers custom developed solutions to achieve the client’s business needs. Recognized for his unique problem solving, business acumen, and his ability deliver excellent results no matter the task. Graduated in 2015 with a Bachelor of Science in Industrial Engineering, a Minor in Mathematics, and a Certificate in Safety Engineering from Texas A&M University. </p>
                <div>
                    <button onClick={() => window.open(require('../assets/documents/Resume.pdf'), 'blank')}>Resume</button>
                    <button onClick={() => window.open('https://www.linkedin.com/in/ian-roskow-5b1270a6/', 'blank')}>Linked In</button>
                </div>
                <div className='myStack aboutContainer'>
                    <h2>My Stack</h2>
                    <div>
                        <div className='stack'>
                            Top Skills
                            <small>HTML5 - CSS3 - Javascript - ReactJS - Redux - Babel - Git - Agile</small>
                        </div>
                        <div className='stack'>
                            Knowledgable
                            <small>JQuery - Bootstrap - SASS </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;