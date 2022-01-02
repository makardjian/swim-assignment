import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import LinkShortener from './components/LinkShortner/LinkShortener';
import Links from './components/Links/Links';
import type { Link } from './components/Links/Link.type';
import { fetchShortenedLink } from './api/fetchShortenedLink';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  const [links, setLinks] = useState([] as Link[]);
  const [linkGenerationError, setLinkGenerationError] = useState('');

  const generateShortenedLink = async (originalUrl: string) => {
    const link: Link = await fetchShortenedLink(originalUrl);
    const { shortLink, errorMessage } = link;
    if (shortLink) {
      const newLinks = [...links, link];
      console.log({ newLinks });
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
      <div className={classes.linkShortenerAndLinksContainer}>
        <LinkShortener generateShortenedLink={generateShortenedLink} />
        <Links links={links} />
      </div>
    </div>
  );
}

export default App;
