import React from "react";

function Portfolio() {
  
  return(
  <div>
    <div>
    <h1>Projects</h1>
    </div>
    <div className="flex-row">
    <figure>
        <div className="cap"><a href="https://uot-project1-group07.github.io/project1-group07/">Covid Posi+ivity </a><a href="https://github.com/Uot-Project1-Group07/project1-group07"><i className="fa logo">&#xf09b;</i></a>
        </div>
        <img src={require(`../../assets/small/covid.png`).default} className="img-thumbnail mx-1" alt="Covid Positivity" key="Covid"/>                
    </figure>
    <figure>
        <div className="cap"><a href="https://mnmlize.herokuapp.com/">MNMLIZE </a><a href="https://github.com/P-I-M/Personal-Inventory-Management-"><i className="fa logo">&#xf09b;</i></a>
        </div>
        <img src={require(`../../assets/small/pim.png`).default} className="img-thumbnail mx-1" alt="Mnmlize" key="Mnmlize"/>        
    </figure>
    <figure>
        <div className="cap"> Note taker <a href="https://github.com/Anagha778/note-taker"><i className="fa logo">&#xf09b;</i></a></div>
        <img src={require(`../../assets/small/covid.png`).default} className="img-thumbnail mx-1" alt="note" key="note"/>        
    </figure>
      
      </div>
  </div>
  );
};

export default Portfolio;