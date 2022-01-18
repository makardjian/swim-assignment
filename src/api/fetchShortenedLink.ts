import type { Link } from '../components/Links/Link.type';
import { v4 as uuid } from 'uuid';

const API_BASE = 'https://api.shrtco.de/v2/shorten';

type ApiResponse = {
  ok: boolean;
  result: {
    code: string;
    full_share_link: string;
    full_short_link: string;
    full_short_link2: string;
    full_short_link3: string;
    original_link: string;
    share_link: string;
    short_link: string;
    short_link2: string;
    short_link3: string;
  };
  error?: string;
  error_code?: number;
};

export const fetchShortenedLink = async (
  originalUrl: string
): Promise<Link> => {
  const REQUEST_URL = `${API_BASE}?url=${originalUrl}`;
  try {
    const response = await fetch(REQUEST_URL);
    const responseData: ApiResponse = await response.json();
    if (responseData.ok) {
      const {
        result: { short_link, original_link },
      } = responseData;
      return {
        shortLink: `https://${short_link}`,
        originalLink: original_link,
        id: uuid(),
      };
    }
    throw new Error(responseData.error);
  } catch (error: any) {
    return {
      errorMessage: error.message,
      id: uuid(),
    };
  }
};
