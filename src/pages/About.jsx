import React from 'react';

function About() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">About This Project</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-700 mb-4">
          This is a React application that demonstrates routing concepts using the Rick & Morty API.
        </p>
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Basic Routing with React Router DOM</li>
          <li>Nested Routes with Layout Components</li>
          <li>Dynamic Routes for Character Details</li>
          <li>API Integration with Rick & Morty API</li>
        </ul>
      </div>
    </div>
  );
}

export default About;