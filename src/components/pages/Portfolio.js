import React from "react";

function Portfolio() {
  const images = [
    {
      img_name:'covid.png',
      app_name:'Covid Posi+ivity',
      app_url:'https://uot-project1-group07.github.io/project1-group07/',
      git_url:'https://github.com/Uot-Project1-Group07/project1-group07'
    },
    {
      img_name:'pim.png',
      app_name:'MNMLIZE',
      app_url:'https://mnmlize.herokuapp.com/',
      git_url:'https://github.com/P-I-M/Personal-Inventory-Management-'
    },
    {
      img_name:'weather.png',
      app_name:'Weather Dashboard',
      app_url:'https://anagha778.github.io/weather-dashboard/',
      git_url:'https://github.com/Anagha778/weather-dashboard'
    },
    {
      img_name:'work.png',
      app_name:'Work Day Scheduler',
      app_url:'https://anagha778.github.io/day-scheduler/',
      git_url:'https://github.com/Anagha778/day-scheduler'
    },
    {
      img_name:'code.png',
      app_name:'Code Quiz',
      app_url:'https://anagha778.github.io/code-quiz/',
      git_url:'https://github.com/Anagha778/code-quiz'
    },
    {
      img_name:'blog.png',
      app_name:'Tech Blog',
      app_url:' https://pacific-sands-72490.herokuapp.com/',
      git_url:'https://github.com/Anagha778/blog-post'
    },

  ]

  return(
  <div>
    <div>
    <h1>Projects</h1>
    </div>
    <div className="flex-row">
      {images.map(image => (
      <figure>
          <div className="cap"><a className="lk" href={image.app_url} target="_blank">{image.app_name}</a><a className="lk" href={image.git_url} target="_blank"><i className="fa logo">&#xf09b;</i></a></div>
          <img src={require(`../../assets/small/${image.img_name}`).default} className="img-thumbnail mx-1" alt={image.app_name} key={image.app_name}/>                
      </figure>   
        ))}
    </div>
  </div>
  );
};

export default Portfolio;