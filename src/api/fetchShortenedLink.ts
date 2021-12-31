const API_BASE = 'https://api.shrtco.de/v2/shorten';

export const fetchShortenedLink = async (originalUrl: string) => {
  const REQUEST_URL = `${API_BASE}?url=${originalUrl}`;
  console.log({ REQUEST_URL });
  try {
    const response = await fetch(REQUEST_URL);
    const responseData = await response.json();
    console.log({ responseData });
  } catch (e) {
    console.log('oh no, an error happened');
  }
};
