import React from 'react';

const About = () => {
  return (
    <div className='about main'>
      <div className='aboutMe aboutContainer'>
        <h1>About Me</h1>
        <div className='aboutSection'>
          I am Ian Roskow, a 26 year old Front-end Developer who loves to solve
          problems with creative solutions.
          <br />
          <br />
          <div className='headers'>My Past</div>
          I graduated from Texas A&M University with a Bachelor's in Industrial
          Engineering and a Minor in Mathematics. During my time in school, I
          took a few programming classes and realized my natural aptitude for
          coding. I decided to finish my degree in Engineering for the job
          versatility it offered, but I always had the intention to become a
          developer. I was offered a job with a technology consulting firm,
          Hitachi Consulting, and used this as my way into the development
          world. For the next three years I worked as a web developer, creating
          custom web solutions for Fortune 500 companies. During that time I was
          able to work with a range of managers, teams, and technologies to
          create applications that helped add value to our clients' business
          processes. See my resume for a detailed list of the projects I worked
          on. By the time I left the company I had established myself as a lead
          front-end developer and a front-end subject matter expert among my
          coworkers.
          <br />
          <br />
          <div className='headers'>Now</div>I am now looking for a full time
          opportunity to join a remote team of developers, where I can be
          challenged and develop meaningful applications. My stack, resume, and
          LinkedIn profile can be found below. I look forward to talking with
          you.
        </div>
        <div>
          <button
            onClick={() =>
              window.open(
                require('../assets/documents/IanRoskowResume.pdf'),
                'blank'
              )
            }
          >
            Resume
          </button>
          <button
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/ian-roskow-5b1270a6/',
                'blank'
              )
            }
          >
            Linked In
          </button>
        </div>
        <div className='myStack aboutContainer'>
          <h2>My Stack</h2>
          <div>
            <div className='stack'>
              Top Skills
              <small>
                HTML5 - CSS3 - Javascript - ReactJS - Redux - Babel - Git -
                Agile - Adobe XD
              </small>
            </div>
            <div className='stack'>
              Knowledgable
              <small>
                NodeJS - Express - MongoDB - JQuery - Bootstrap - SASS -
                Sharepoint
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
