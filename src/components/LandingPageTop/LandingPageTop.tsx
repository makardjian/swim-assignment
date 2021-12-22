import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '../common/Button';
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
    paddingTop: '35px',
  },
  textAndButtonContainer: {
    width: '50%',
  },
  mainHeaderText: {
    fontSize: '72px',
    color: Colors.neutral['@veryDarkViolet:'],
    fontWeight: '900',
    fontFamily: 'sans-serif',
  },
  subHeaderTextContainer: {
    width: '80%',
  },
  subHeaderText: {
    color: Colors.neutral['@grayishViolet'],
    fontWeight: '700',
  },
  buttonContainer: {
    padding: '30px 0px',
  },
  imageContainer: {
    marginTop: '-75px',
    marginRight: '-75px',
    width: '50%',
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
      <div className={styles.textAndButtonContainer}>
        <div className={styles.mainHeaderText}>{MAIN_HEADER_TEXT}</div>
        <div className={styles.subHeaderTextContainer}>
          <div className={styles.subHeaderText}>{SUB_HEADER_TEXT}</div>
        </div>
        <div className={styles.buttonContainer}>
          <Button text={BUTTON_TEXT} size='large' />
        </div>
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
