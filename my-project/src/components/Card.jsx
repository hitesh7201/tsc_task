import React from "react";

const Card = ({ position, title, company, location, type, posted_ago }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white m-2">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">Position: {position}</p>
      <p className="text-gray-700 text-base">Company: {company}</p>
      <p className="text-gray-700 text-base">Location: {location}</p>
      <p className="text-gray-700 text-base">Type: {type}</p>
      <p className="text-gray-700 text-base">Posted: {posted_ago}</p>
    </div>
  );
};

export default Card;
