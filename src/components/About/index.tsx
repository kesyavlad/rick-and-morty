import React from 'react';
import './index.css';
const About = () => {
  return (
    <>
      <div className="flexBlock">
        <div>
          <div className="imgSize"></div>
          <h1 className="styleContacts">About me</h1>
          <p className="textSize">
            I am a highly motivated novice Frontend developer. I approach the creation of sites or
            chips for it with great enthusiasm. In the process of development I always pay attention
            to details and try to approach the task from different sides.
          </p>
          <h1 className="styleContacts"> Contacts: </h1>
          <p className="styleContacts">
            Mobile:
            <a href="tel:+38(066)725-63-28">+38(066)725-63-28</a>
          </p>
          <p className="styleContacts">
            Email:
            <a href="mailto: kesyavlad74@gmail.com">kesyavlad74@gmail.com</a>
          </p>
          <p className="styleContacts">
            GitHub:
            <a href="https://github.com/kesyavlad">https://github.com/kesyavlad</a>
          </p>
          <p className="styleContacts">
            Linkedin:
            <a href="https://www.linkedin.com/in/vladislav-kesia-13bb28138/">
              https://www.linkedin.com
            </a>
          </p>
          <button className="styleButton">
            <a href="src/assets/images/Kesia_CV.pdf" download>
              Download CV
            </a>
          </button>
        </div>
        <div>
          <div className="myName">
            <div className="textColor">Kesia Vladislav</div>
            <h3>Front-End Developer</h3>
          </div>
          <div className="blockInformation">
            <div className="styleBlock">
              <h1 className="styleContacts">About this project</h1>
              This is a pet-project, he created for those who want to find a particular character,
              who want to watch or just started watching Rick and Morty and want to understand what
              the show is about, on this site you will find information about the main characters
              can watch trailers for all seasons, as well as find the character and all the series
              in which he was.{' '}
            </div>
            <div className="styleBlock">
              <h1 className="styleContacts">Hard Skils</h1>
              <ul>
                <li>JavaScript</li>
                <li> React</li>
                <li> Redux</li>
                <li> TypeScript</li>
                <li> Git </li>
                <li> Bootstap </li>
                <li> HTML & CSS</li>
              </ul>
            </div>
            <div className="styleBlock">
              <h1 className="styleContacts">About other projects</h1>
              Movieshots company March 2022 — Present
              <ul>
                <li>Worked on creating a website for the NFT</li>
                <li> Processing data from the server creating requests to the server</li>
                <li>Worked on the admin panel for https://www.movieshots.io/</li>
                <li>Worked on adding NFT data using React Table</li>{' '}
                <li>Worked on changing data in NFT data</li>
                <li> Displaying the function panel for different access levels</li>
                <li>They also made modal windows to delete or change the NFT</li>
              </ul>
            </div>
            <div className="styleBlock">
              <h1 className="styleContacts">Soft Skils</h1>
              <ul>
                <li> Communication</li>
                <li> Collaboration</li>
                <li> Problem</li>
                <li> Solving</li>
                <li> Active</li>
                <li> Listening</li>
                <li> Team Player</li>
                <li> Adaptive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
