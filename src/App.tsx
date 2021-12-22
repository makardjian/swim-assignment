import React from 'react';
import Header from './components/Header/Header';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <div className={classes.appContentContainer}>
        <Header />
      </div>
    </div>
  );
}

export default App;
