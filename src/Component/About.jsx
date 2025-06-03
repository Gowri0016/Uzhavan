import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-10">
      {/* Section Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
        About the Project
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Photo Frame */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="border-4 border-green-600 rounded-xl p-2 shadow-lg bg-white">
            <img
              src="https://via.placeholder.com/300x350.png?text=Tharaneshwaran.A"
              alt="Tharaneshwaran.A"
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="text-center mt-2 font-semibold text-green-700">Tharaneshwaran.A</p>
          </div>
        </div>

        {/* About Text */}
        <div className="w-full md:w-2/3 text-green-800 text-lg space-y-4">
          <p>
            This project was proudly developed and managed by <strong>Tharaneshwaran.A</strong>, 
            a passionate developer dedicated to building impactful tech solutions for communities and industries.
          </p>
          <p>
            The project was initiated at <strong>Vellalar College of Engineering</strong>, where innovative thinking and practical implementation go hand in hand.
            This work reflects the values of technology, agriculture, and service.
          </p>
          <p>
            With a focus on usability and real-world benefits, the system was designed to aid farmers and professionals in 
            streamlining agricultural data and services using modern digital platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
