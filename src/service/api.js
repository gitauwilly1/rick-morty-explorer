const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(page = 1, search = '') {
  try {
    const searchParam = search ? `&name=${encodeURIComponent(search)}` : '';
    const response = await fetch(`${BASE_URL}/character?page=${page}${searchParam}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}

export async function getCharacterById(id) {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
}

export async function getEpisodes(episodeUrls) {
  try {
    const promises = episodeUrls.map(url => fetch(url).then(res => res.json()));
    const episodes = await Promise.all(promises);
    return episodes;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    throw error;
  }
}