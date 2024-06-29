import React, { useState } from 'react';
import '../assets/styles/experienceCard.scss';

export const ExperienceCard = ({ imageSrc, title, description, lugar, reverse  }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`experience-card ${isExpanded ? 'expanded' : 'notExpanded'} ${reverse ? 'reverse' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <div className="image-container">
        <img src={imageSrc} alt={title} className="experience-image" />
        <div className="hover-text">Click</div>
      </div>
      <div className="content-container">
        <h2 className='text-center'>{title}</h2>
        <hr />
        <br />
        {isExpanded && description}
        {isExpanded && <h5 className="text-lg">{lugar}</h5>}
      </div>
    </div>
  );
};
