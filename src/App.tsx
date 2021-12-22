import React from 'react';
import Header from './components/Header/Header';
import LandingPageTop from './components/LandingPageTop/LandingPageTop';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <div className={classes.appContentContainer}>
        <Header />
        <LandingPageTop />
      </div>
    </div>
  );
}

export default App;
