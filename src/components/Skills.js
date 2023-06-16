import React, {useEffect, useState} from 'react';
import { Button } from './Button';
import './Skills.css';
import Card from './Card';
// import { faIcon1, faIcon2, faIcon3 } from '@fortawesome/free-solid-svg-icons';

function Skills() {

  const [button, setButton] = useState(true);
  
  const [expanded, setExpanded] = useState(false);

  const [selectedCard, setSelectedCard] = useState(-1);

  const handleClick = (selected) => {
    if (expanded) {
      setExpanded(false);
      setSelectedCard(-1)
    } else {
      setExpanded(true);
      setSelectedCard(selected)
    }
  };

  const card1Icons = ["fa-brands fa-html5" , "fa-brands fa-css3-alt", "fa-brands fa-react", "fa-brands fa-bootstrap", "fa-brands fa-js"];
  const card2Icons = ["fa-brands fa-java" , "fa-brands fa-android", "fa-brands fa-c", "fa-brands fa-python"];
  const card3Icons = ["fa-brands fa-git-alt" , "fa-brands fa-github", "fa-brands fa-aws", "fa-brands fa-jira"];
  // const card2Icons = [faIcon3, faIcon2, faIcon1];

  return (
    <>
        <div className="skills-wrapper">
            <div className="container-fluid text-center">
            <div className="row">
              <div className="col-md-12 header">
                <h2>Skills</h2>
              </div>
          
                <div className={`d-flex justify-content-center ${(selectedCard === 1) ? 'col-md-8'  : 'col-md-4'}`}>
                  <div className="card-div" onClick={() => handleClick(1)}>
                    <Card title="Front-End" backgroundImage="../../" expandedTxt={"This site was made in react."} icons={card1Icons} />
                  </div>
                </div>
                <div className={`d-flex justify-content-center ${(selectedCard === 2) ? 'col-md-8'  : 'col-md-4'}`}>      
                  <div className="card-div" onClick={() => handleClick(2)}>
                    <Card title="Back-End" backgroundImage="" icons={card2Icons} />
                  </div>
                </div>
                <div className={`d-flex justify-content-center ${(selectedCard === 3) ? 'col-md-8'  : 'col-md-4'}`}>      
                  <div className="card-div" onClick={() => handleClick(3)}>
                    <Card title="DevOps" backgroundImage="" icons={card3Icons} />
                  </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skills