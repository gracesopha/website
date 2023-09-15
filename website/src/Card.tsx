import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

//card component for projects
interface CardProps {
  title: string;
  imageUrl: string;
  study: string;
  desc: string;
}

export const Card: React.FC<CardProps> = ({ title, imageUrl, study, desc }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <Link to={study} className="more">→</Link>
    </div>
  );
};

export default Card;
