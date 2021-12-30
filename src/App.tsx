import React from 'react';
import Navigation from './components/Navigation/Navigation';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import LandingPageMiddle from './components/LandingPageMiddle/LandingPageMiddle';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <Navigation />
      <LandingPageTop />
      <LandingPageMiddle />
    </div>
  );
}

export default App;
