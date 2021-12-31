import React from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import LinkShortener from './components/LinkShortner/LinkShortener';
import { fetchShortenedLink } from './api/fetchShortenedLink';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();

  const generateShortenedLink = async (originalUrl: string) => {
    const response = await fetchShortenedLink(originalUrl);
    return;
  };

  return (
    <div className={classes.appRoot}>
      <Navigation />
      <LandingPageTop />
      <LinkShortener generateShortenedLink={generateShortenedLink} />
    </div>
  );
}

export default App;
