import React, { useState } from "react";
import Vegetables from "../../Pages/VegetablesPage";

const UploadPopup = ({ isOpen, onClose, uploaded }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);  // For the actual file to upload

  const [link, setLink] = useState(null);
  const [label, setLabel] = useState(null);
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Set preview URL
      };
      setFile(uploadedFile); // Save file for later upload
      reader.readAsDataURL(uploadedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Set preview URL
      };
      setFile(uploadedFile); // Save file for later upload
      reader.readAsDataURL(uploadedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file, file.name);

    try {
      const response = await fetch(
        "https://javascript-backend-623812248472.asia-southeast2.run.app/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const result = await response.json();
      console.log("Image uploaded successfully:", result);
      alert("Image uploaded successfully!");
      setLink(result.data.link);
      setLabel(result.data.label);
      onClose({
        label: result.data.label,
        link: result.data.link,
        details: result.data.details
      }); // Close the popup after submission

    
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image.");
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadPopup;