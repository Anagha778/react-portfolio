import React from "react";

const Resume = () => (
  <div>
    <h2>Resume</h2>
    <div>
    <p>Download my <a href="../../assets/small/Resume.docx" download>resume</a></p>
    </div>
    <div>Front end proficiencies: </div>
    <ul className="resume">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Jquery</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>Bootstrap</li>
    </ul>
    <div>Back end proficiencies: </div>
    <ul className="resume">
      <li>API's</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySql, Sequelize</li>
      <li>MongoDB, Mongoose</li>
      <li>Rest</li>
      <li>GraphQL</li>
    </ul>
  </div>
);

export default Resume;