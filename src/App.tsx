import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import LinkShortener from './components/LinkShortner/LinkShortener';
import {
  fetchShortenedLink,
  TransformedApiResponse,
} from './api/fetchShortenedLink';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  const [links, setLinks] = useState([] as string[]);
  const [linkGenerationError, setLinkGenerationError] = useState('');

  const generateShortenedLink = async (originalUrl: string) => {
    const response: TransformedApiResponse = await fetchShortenedLink(
      originalUrl
    );
    const { shortLink, errorMessage } = response;
    if (shortLink) {
      const newLinks = [...links, shortLink];
      setLinks(newLinks);
      return;
    }
    if (errorMessage) {
      setLinkGenerationError(errorMessage);
    }
  };

  console.log({
    links,
    linkGenerationError,
  });

  return (
    <div className={classes.appRoot}>
      <Navigation />
      <LandingPageTop />
      <LinkShortener generateShortenedLink={generateShortenedLink} />
    </div>
  );
}

export default App;
