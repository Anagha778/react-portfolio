import React from "react";

const AboutMe = () => (
  <div>
    <div className = "about">
    <h2>About Me</h2>
    </div>
    <div className = "about">
    <img
            src={require(`../../assets/small/Pic.png`).default}
            alt="profile"
            className="profimg"
            key="profile"
    />
    </div>
    <div className = "about">
    <p>
    My name is Anagha, I live in Toronto with my family. I am a foodie and love to travel. I recently graduated from university of Toronto coding bootcamp.
    During the course we learnt creating beautiful, usable, professional websites using best practice accessibility and the latest W3 web standard guidelines resulting in semantic and user friendly HTML and CSS websites. We also learned latest new front end and back end technologies which help us to build real time applications.All my sites are lovingly hand coded.
    I design websites that convert visitors into customers and help your business grow. Given links to some of my websites to showcase my potential to fit for a given position.  
    All the Websites linked in portfolio section are designed, built according to latest web standards.
    </p>
    </div>
  </div>
);

export default AboutMe;