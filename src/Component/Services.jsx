import React, { useState, useEffect } from 'react';
import MapWithSelector from './MapWithSelector'; // adjust path if needed
import { FiCamera } from 'react-icons/fi';

export default function Services() {
  const [userPhoto, setUserPhoto] = useState(null);
  const [fertilizerPhoto, setFertilizerPhoto] = useState(null);
  const [animateUserPhoto, setAnimateUserPhoto] = useState(false);

  const handleUserPhotoChange = (e) => {
    if (e.target.files[0]) {
      setUserPhoto(URL.createObjectURL(e.target.files[0]));
      setAnimateUserPhoto(true);
    }
  };

  const handleFertilizerPhotoChange = (e) => {
    if (e.target.files[0]) {
      setFertilizerPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Remove animation class after animation ends
  useEffect(() => {
    if (animateUserPhoto) {
      const timer = setTimeout(() => setAnimateUserPhoto(false), 600);
      return () => clearTimeout(timer);
    }
  }, [animateUserPhoto]);

  return (
    <div className="max-w-lg mx-auto p-8 bg-green-50 rounded-lg shadow-lg mt-28">
      {/* User photo rectangular */}
      <div
        className={`mx-auto w-48 h-32 rounded-md
          bg-gradient-to-tr from-green-400 to-green-700 p-1 shadow-xl
          transition-transform duration-300
          ${animateUserPhoto ? 'animate-bounce' : ''}
          hover:scale-105 hover:shadow-2xl`}
      >
        <div className="relative w-full h-full rounded-md bg-white overflow-hidden">
          {userPhoto ? (
            <img
              src={userPhoto}
              alt="User Upload"
              className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-green-500 text-5xl font-bold select-none">
              🌱
            </div>
          )}

          {/* Animated Camera Icon overlay */}
          <label
            htmlFor="userPhotoInput"
            className="absolute bottom-2 right-2 bg-green-700 text-white rounded-full p-2 cursor-pointer 
              hover:bg-green-800 transition-shadow shadow-lg animate-pulse"
            title="Upload Photo"
          >
            <FiCamera size={20} />
          </label>
          <input
            id="userPhotoInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUserPhotoChange}
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
        Fertilizer & Land Details
      </h2>

      <form className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-green-700 font-semibold mb-1">Farmer Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-green-700 font-semibold mb-1">Contact Number</label>
          <input
            type="tel"
            placeholder="Enter contact number"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-green-700 font-semibold mb-1">Fertilizer Quantity (kg)</label>
          <input
            type="number"
            min="0"
            placeholder="Enter quantity"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Acres of Land */}
        <div>
          <label className="block text-green-700 font-semibold mb-1">How many acres of land?</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter acres"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Satellite Map with Google 3D view */}
        <div>
          <MapWithSelector />
        </div>

        {/* Fertilizer Photo Upload */}
        <div className="relative">
          <label className="block text-green-700 font-semibold mb-2">Upload Fertilizer Image</label>

          {/* Upload Box */}
          <label
            htmlFor="fertilizerPhotoInput"
            className={`
              cursor-pointer flex flex-col items-center justify-center
              border-2 border-dashed border-green-400 rounded-xl
              p-8 bg-green-50 relative text-green-700 text-center
              select-none
              hover:border-green-600 hover:shadow-lg transition
              group
              before:absolute before:inset-0 before:bg-gradient-to-tr before:from-green-100 before:to-green-200 before:opacity-30 before:rounded-xl
              before:pointer-events-none
            `}
          >
            {fertilizerPhoto ? (
              <>
                <img
                  src={fertilizerPhoto}
                  alt="Fertilizer Upload"
                  className="w-44 h-44 object-cover rounded-xl shadow-2xl border-4 border-green-300 animate-fadeIn"
                  style={{ animationFillMode: 'forwards', animationDuration: '0.5s' }}
                />
                <span className="mt-3 text-green-600 font-semibold text-sm">Preview</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 h-14 mb-3 text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3M16 7l-4-4m0 0L8 7m4-4v11" />
                </svg>
                <p className="text-green-600 font-medium text-sm tracking-wide">
                  Click or drag image here to upload
                </p>
              </>
            )}

            <input
              id="fertilizerPhotoInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFertilizerPhotoChange}
            />
          </label>

          {/* Remove Image Button */}
          {fertilizerPhoto && (
            <button
              type="button"
              onClick={() => setFertilizerPhoto(null)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition"
              title="Remove image"
            >
              &times;
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Submit Details
        </button>
      </form>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95);}
          to { opacity: 1; transform: scale(1);}
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
          animation-duration: 0.5s;
        }
      `}</style>
    </div>
  );
}
