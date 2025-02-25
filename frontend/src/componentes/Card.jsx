import React from "react";

const Card = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg  flex transition-shadow duration-300">
      <img src={image} alt={title} className="w-20 h-20 object-cover w-24 h-24 rounded-full flex items-center " />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
