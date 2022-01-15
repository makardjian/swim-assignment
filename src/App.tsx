import React, { useState } from 'react';
import { Theme } from './styles/Theme';
import Navigation from './components/Navigation/Navigation';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import LinkShortener from './components/LinkShortner/LinkShortener';
import Links from './components/Links/Links';
import LandingPageBottom from './components/LandingPageBottom/LandingPageBottom';
import CallToActionBanner from './components/CallToActionBanner/CallToActionBanner';
import Footer from './components/Footer/Footer';
import type { Link } from './components/Links/Link.type';
import { fetchShortenedLink } from './api/fetchShortenedLink';
import useStyles from './App.styles';
import {
  EMPTY_INPUT_ERROR_MSG,
  INVALID_URL_ERROR_MSG,
} from './static/errorMessages.constants';
import { MOCK_LINKS } from './static/mockData';

function ShortlyLinkShortenerApp() {
  const classes = useStyles();
  const [links, setLinks] = useState(MOCK_LINKS as Link[]);
  const [linkShortenerErrorMessage, setLinkShortenerErrorMessage] =
    useState('');

  const generateShortenedLink = async (originalUrl: string) => {
    if (!originalUrl.length) {
      setLinkShortenerErrorMessage(EMPTY_INPUT_ERROR_MSG);
      return;
    }
    const link: Link = await fetchShortenedLink(originalUrl);
    const { shortLink, errorMessage } = link;
    if (shortLink) {
      const newLinks = [link, ...links];
      console.log({ newLinks });
      setLinks(newLinks);
      return;
    }
    if (errorMessage) {
      console.log({ errorMessage });
      setLinkShortenerErrorMessage(INVALID_URL_ERROR_MSG);
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
    linkShortenerErrorMessage,
  });

  return (
    <div className={classes.appRoot}>
      <Navigation />
      <LandingPageTop />
      <div className={classes.linkShortenerAndLinksContainer}>
        <LinkShortener
          generateShortenedLink={generateShortenedLink}
          errorMessage={linkShortenerErrorMessage}
          clearErrorMessage={() => setLinkShortenerErrorMessage('')}
          linkCount={links.length}
        />
        <Links links={links} onCopyLink={onCopyLink} />
      </div>
      <LandingPageBottom />
      <CallToActionBanner />
      <Footer />
    </div>
  );
}

function AppWithProviders() {
  return (
    <Theme>
      <ShortlyLinkShortenerApp />
    </Theme>
  );
}

export default AppWithProviders;
