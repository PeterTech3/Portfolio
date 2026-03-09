import { useState } from "react";
import "../assets/styles/experienceCard.scss";

export const ExperienceCard = ({ imageSrc, title, description, lugar, reverse }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`experience-card ${isExpanded ? "expanded" : "notExpanded"} ${reverse ? "reverse" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="image-container">
        <img src={imageSrc} alt={title} className="experience-image" />
        <div className="hover-text">Click</div>
      </div>
      
      <div className="content-container">
        <h2 className="text-center text-green-400">{title}</h2>
        <hr className="border-green-800/30 my-4" />
        <div className="description-text text-slate-200">{description}</div>
        <h5 className="text-lg text-green-500 mt-4">{lugar}</h5>
      </div>
    </div>
  );
};