import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img">
        <h2>{props.title || "Hello World!"}</h2>
        <p>{props.description || "This is Dark or Light Theme Testing"}</p>
      </div>
    </div>
  );
};

export default Card;
