import React from 'react';
import { makeStyles } from '@mui/styles';
import illustrationWorking from '../../static/images/illustration-working.svg';
import Colors from '../../Colors';
import {
  MAIN_HEADER_TEXT,
  SUB_HEADER_TEXT,
  BUTTON_TEXT,
} from './LandingPageTop.constants';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '40px',
  },
  mainHeaderText: {
    fontSize: '72px',
    color: Colors.neutral['@veryDarkViolet:'],
    fontWeight: '900',
    fontFamily: 'sans-serif',
  },
  imageContainer: {
    marginTop: '-75px',
    marginRight: '-75px',
  },
  image: {
    width: '130%',
    height: '100%',
  },
});

const LandingPageTop = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.mainHeaderText}>{MAIN_HEADER_TEXT}</div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={illustrationWorking}
          alt='illustrationworking'
        />
      </div>
    </div>
  );
};

export default LandingPageTop;
