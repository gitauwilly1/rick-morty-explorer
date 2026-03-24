import React from 'react';
import { useOutletContext } from 'react-router-dom';

function CharacterInfo() {
  const { character } = useOutletContext();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Gender</h3>
          <p className="text-lg">{character.gender}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Type</h3>
          <p className="text-lg">{character.type || 'Unknown'}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Origin</h3>
          <p className="text-lg">{character.origin.name}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Last Known Location</h3>
          <p className="text-lg">{character.location.name}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Species</h3>
          <p className="text-lg">{character.species}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Created</h3>
          <p className="text-lg">{new Date(character.created).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;