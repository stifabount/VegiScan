import React, { useState } from "react";

const UploadPopup = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Menyimpan data URL gambar
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Menghindari perilaku default browser
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Menyimpan data URL gambar
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-4xl w-full">
        <div
          className="mb-6 border-2 border-dashed rounded-lg p-10 text-center text-gray-500"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {image ? (
            <img src={image} alt="Preview" className="max-h-64 mx-auto" />
          ) : (
            <>
              <p className="text-md text-gray-600">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="fileUpload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileUpload"
                className="cursor-pointer text-primary-500 underline"
              >
                Browse files
              </label>
            </>
          )}
        </div>
        <button
          className="w-full bg-primary-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-600"
          onClick={onClose}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadPopup;
