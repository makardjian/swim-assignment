import React from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import LinkShortener from './components/LinkShortner/LinkShortener';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <Navigation />
      <LandingPageTop />
      <LinkShortener />
    </div>
  );
}

export default App;
