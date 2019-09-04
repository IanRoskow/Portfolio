import React from 'react';

const Contact = () => {
    return (
        <div className='contact main'>
            <div className="contactMe">
                <h1>Contact Me</h1>
                <h2>ianroskow@gmail.com</h2>
                <div className='iconContainer'>
                    <a href="https://github.com/IanRoskow" rel="noopener noreferrer" target="_blank">
                        Git Hub
                    </a>
                    <a href="https://www.linkedin.com/in/ian-roskow-5b1270a6/" rel="noopener noreferrer" target="_blank">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/ianroskow/" rel="noopener noreferrer" target="_blank">
                        Instagram
                    </a>
                    <a href="https://stackoverflow.com/users/8345731/roskow" rel="noopener noreferrer" target="_blank">
                        Stack Overflow
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;