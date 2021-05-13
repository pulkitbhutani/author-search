import React from "react";
import './Card.css';

function Card({ postData }) {
  return (
    <div className="post-card">
      <h3>{postData.title}</h3>
      <h4>{postData.author}</h4>
    </div>
  );
}

export default Card;
