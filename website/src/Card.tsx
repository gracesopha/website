import React from 'react';
import "./style.css";

//card component for projects
interface CardProps {
  title: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
