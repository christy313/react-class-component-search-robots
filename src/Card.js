import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="br3 pa2 ma2 dib tc bg-light-green grow shadow-3">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
