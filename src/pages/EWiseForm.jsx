import React, { useState } from 'react';

const EWiseForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    instructions: '',
    address: '',
    wasteType: '',
    images: [],
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex gap-8 p-4">
      {/* Left Section */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">What you need to do?</h2>
        <p>
          Fill out the form beside to schedule a pickup for your e-waste. Choose a convenient date and time, 
          provide a detailed address, and specify the type of e-waste to be collected. You can also upload images 
          for better identification and add any additional instructions you may have.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Upload Your E-Waste</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label className="block mb-1">Type of E-Waste:</label>
            <input
              type="text"
              name="wasteType"
              value={formData.wasteType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="E.g., batteries, electronics, appliances"
            />
          </div>
          <div>
            <label className="block mb-1">Additional Instructions:</label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter any special instructions"
            />
          </div>
          <div>
            <label className="block mb-1">Upload Image(s):</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleImageChange}
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EWiseForm;
