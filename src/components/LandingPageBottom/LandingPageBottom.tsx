import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';
import {
  ADVANCED_STATISTICS,
  ADVANCED_STATISTICS_DESCRIPTION,
} from './LandingPageBottom.constants';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '540px',
    margin: '0px auto',
  },
  header: {
    fontSize: '42px',
    fontWeight: 700,
    color: Colors.neutral['@veryDarkBlue'],
  },
  subheader: {
    textAlign: 'center',
    margin: 0,
    fontWeight: 500,
    color: Colors.neutral['@grayishViolet'],
  },
});

const LandingPageBottom = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{ADVANCED_STATISTICS}</h2>
      <p className={styles.subheader}>{ADVANCED_STATISTICS_DESCRIPTION}</p>
    </div>
  );
};

export default LandingPageBottom;
