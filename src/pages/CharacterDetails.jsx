import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { getCharacterById } from '../services/api';

function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  async function fetchCharacter() {
    try {
      setLoading(true);
      const data = await getCharacterById(id);
      setCharacter(data);
      setError(null);
    } catch (err) {
      setError('Character not found or failed to load.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading character...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Oops!</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={() => navigate('/dashboard/characters')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Characters
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:text-blue-800 flex items-center"
      >
        ← Back to Characters
      </button>

      {/* Character Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <img 
            src={character.image} 
            alt={character.name}
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
          <div>
            <h2 className="text-3xl font-bold mb-2">{character.name}</h2>
            <div className="flex items-center mb-2">
              <span className={`w-3 h-3 rounded-full mr-2 ${
                character.status === 'Alive' ? 'bg-green-500' :
                character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'
              }`} />
              <span className="text-gray-700">
                {character.status} - {character.species}
              </span>
            </div>
            <p className="text-gray-600">
              <span className="font-semibold">Origin:</span> {character.origin.name}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> {character.location.name}
            </p>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-4">
          <Link
            to="info"
            className={({ isActive }) =>
              `px-4 py-2 font-medium text-sm rounded-t-lg transition ${
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }
          >
            Info
          </Link>
          <Link
            to="episodes"
            className={({ isActive }) =>
              `px-4 py-2 font-medium text-sm rounded-t-lg transition ${
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }
          >
            Episodes ({character.episode.length})
          </Link>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow p-6">
        <Outlet context={{ character }} />
      </div>
    </div>
  );
}

export default CharacterDetails;