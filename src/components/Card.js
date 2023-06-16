import React,  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css'; // Styles for the card

const Card = ({ title, backgroundImage, expandedTxt, icons }) => {

  const [expanded, setExpanded] = useState(false);
  const [cardText, setCardText] = useState('');

  const handleClick = () => {
    if (expanded) {
      setExpanded(false);
      setCardText('');
    } else {
      setExpanded(true);
      setCardText(`${expandedTxt}`);
    }
  };

  return (
    <div className={`${expanded ? 'card-wrapper' : ''}`}>
      <div className="custom-card" onClick={handleClick} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2 className="title">{title}</h2>
        <div className="icon-bg">
          <div className="icon-list">
          {icons.map((icon, index) => (
            <i className={icon} key={index} />
          ))}
        </div>
        </div>
        
      </div>
      {expanded && 

          <div className="card-expanded pos-1">
            <p className='expanded-content'>${cardText}</p>
          </div>        
      }
      {expanded && 

        <div className="card-expanded pos-2">
          <p className='expanded-content'>${cardText}</p>
        </div>        
      }
      {expanded && 
        <div className="card-expanded pos-3">
          <p className='expanded-content'>${cardText}</p>
        </div>        
      }
    </div>
    
  );
};

export default Card;
