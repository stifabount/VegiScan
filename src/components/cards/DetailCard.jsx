import React from "react";

const DetailCard = ({ name, image, details, onClose }) => {
  if (!name) return null;

  return (
    <div className="w-full min-h-screen bg-white p-8 flex flex-col items-center">
      {/* Tombol kembali */}
      <button
        onClick={onClose}
        className="text-gray-600 hover:text-gray-800 text-sm mb-6 self-start"
      >
        ← Back
      </button>

      {/* Gambar sayuran */}
      <img
        src={image}
        alt={name}
        className="w-full max-w-3xl h-64 object-cover rounded-lg mb-6"
      />

      {/* Nama dan detail */}
      <h2 className="text-4xl font-bold mb-4 text-center">{name}</h2>
      <p className="text-lg text-gray-700 max-w-3xl text-center">{details}</p>
    </div>
  );
};

export default DetailCard;
