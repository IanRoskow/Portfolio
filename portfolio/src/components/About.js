import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <div className='aboutMe aboutContainer'>
                <h1>About Me</h1>
                <p>Ian is a technology consultant who delivers custom developed solutions to achieve the client’s business needs. Recognized for his unique problem solving, business acumen, and his ability deliver excellent results no matter the task. Graduated in 2015 with a Bachelor of Science in Industrial Engineering, a Minor in Mathematics, and a Certificate in Safety Engineering from Texas A&M University. </p>
                <div>
                    <button>Resume</button>
                    <button>Linked In</button>
                </div>
                <div className='myStack aboutContainer'>
                    <h2>My Stack</h2>
                    <div>
                        <div className='stack'>
                            Languages
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                        </div>
                        <div className='stack'>
                            Libraries
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                        </div>
                        <div className='stack'>
                            Frameworks
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                        </div>
                        <div className='stack'>
                            Other
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                            <small>Javascript</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;