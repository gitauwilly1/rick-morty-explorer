import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getEpisodes } from '../services/api';

function CharacterEpisodes() {
  const { character } = useOutletContext();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEpisodes() {
      if (character.episode.length > 0) {
        const data = await getEpisodes(character.episode);
        setEpisodes(data);
        setLoading(false);
      }
    }
    fetchEpisodes();
  }, [character]);

  if (loading) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-600">Loading episodes...</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Episodes</h3>
      <div className="space-y-3">
        {episodes.map((episode) => (
          <div 
            key={episode.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{episode.name}</h4>
                <p className="text-gray-600 text-sm">{episode.episode}</p>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(episode.air_date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Air Date: {episode.air_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterEpisodes;