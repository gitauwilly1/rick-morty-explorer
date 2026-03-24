import React from 'react';

function DashboardHome() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard Home</h2>
      <p className="text-gray-600 mb-6">
        Welcome to the Rick & Morty Character Explorer. Use the navbar to navigate.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Quick Stats</h3>
        <p className="text-blue-600">Explore characters from the Rick and Morty universe</p>
      </div>
    </div>
  );
}

export default DashboardHome;