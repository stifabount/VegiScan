import React from "react";

const VegetablesCard = ({ name, image, description, onClick }) => {
    return (
      <div className="max-w-sm bg-white rounded-lg shadow">
        <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={name} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-textDark">{name}</h5>
          <p className="mb-3 font-normal text-textDark">{description}</p>
          <button
            onClick={onClick}
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            See More
          </button>
        </div>
      </div>
    );
  };

export default VegetablesCard;
