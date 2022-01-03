import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '64px',
    fontWeight: 700,
  },
});

const LandingPageBottom = () => {
  const styles = useStyles();
  return <h2 className={styles.header}>Advanced Statistics</h2>;
};

export default LandingPageBottom;
