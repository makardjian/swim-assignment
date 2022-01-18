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
import { injectIsCopiedValueIntoRawLink } from './utils/injectIsCopiedValueIntoRawLink';
import { setIsCopiedOnLinks } from './utils/setIsCopiedOnLinks';
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
    if (!originalUrl) {
      setLinkShortenerErrorMessage(EMPTY_INPUT_ERROR_MSG);
      return;
    }
    const rawLink: Link = await fetchShortenedLink(originalUrl);
    const { shortLink, errorMessage } = rawLink;
    if (shortLink) {
      const link: Link = injectIsCopiedValueIntoRawLink(rawLink);
      const newLinks: Link[] = [link, ...links];
      setLinks(newLinks);
      return;
    }
    if (errorMessage) {
      setLinkShortenerErrorMessage(INVALID_URL_ERROR_MSG);
    }
  };

  const onCopyLink = (id: string) => {
    const newLinks = setIsCopiedOnLinks({
      links: links,
      copiedLinkId: id,
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
      <section className={classes.linkShortenerAndLinksContainer}>
        <LinkShortener
          generateShortenedLink={generateShortenedLink}
          errorMessage={linkShortenerErrorMessage}
          clearErrorMessage={() => setLinkShortenerErrorMessage('')}
          linkCount={links.length}
        />
        <Links links={links} onCopyLink={onCopyLink} />
      </section>
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
