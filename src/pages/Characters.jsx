import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../services/api';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, [page, searchTerm]);

  async function fetchCharacters() {
    try {
      setLoading(true);
      const data = await getCharacters(page, searchTerm);
      setCharacters(data.results);
      setInfo(data.info);
      setError(null);
    } catch (err) {
      setError('Failed to load characters. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(searchInput);
    setPage(1); // Reset to first page on new search
  }

  function clearSearch() {
    setSearchInput('');
    setSearchTerm('');
    setPage(1);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading characters...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Characters</h2>
      
      {/* Search Bar */}
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search characters by name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Clear
            </button>
          )}
        </form>
        {searchTerm && (
          <p className="mt-2 text-gray-600">
            Showing results for: "{searchTerm}"
          </p>
        )}
      </div>
      
      {/* Character Grid */}
      {characters.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No characters found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
              <Link 
                to={`/dashboard/characters/${character.id}`} 
                key={character.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{character.name}</h3>
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      character.status === 'Alive' ? 'bg-green-500' :
                      character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'
                    }`} />
                    <span className="text-sm text-gray-600">
                      {character.status} - {character.species}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {info.pages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={!info.prev}
                className={`px-4 py-2 rounded ${
                  info.prev 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {page} of {info.pages}
              </span>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={!info.next}
                className={`px-4 py-2 rounded ${
                  info.next 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Characters;