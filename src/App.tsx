import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import LinkShortener from './components/LinkShortner/LinkShortener';
import Links from './components/Links/Links';
import LandingPageBottom from './components/LandingPageBottom/LandingPageBottom';
import CallToActionBanner from './components/CallToActionBanner/CallToActionBanner';
import type { Link } from './components/Links/Link.type';
import { fetchShortenedLink } from './api/fetchShortenedLink';
import useStyles from './App.styles';
import { MOCK_LINKS } from './static/mockData';

function App() {
  const classes = useStyles();
  const [links, setLinks] = useState(MOCK_LINKS as Link[]);
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

  const onCopyLink = (id: string) => {
    const newLinks = links.map((link) => {
      if (link.id === id) {
        return {
          ...link,
          isCopied: true,
        };
      } else {
        return {
          ...link,
          isCopied: false,
        };
      }
    });
    setLinks(newLinks);
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
        <Links links={links} onCopyLink={onCopyLink} />
      </div>
      <LandingPageBottom />
      <CallToActionBanner />
    </div>
  );
}

export default App;
