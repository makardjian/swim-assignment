import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '../common/Button';
import illustrationWorking from '../../static/images/illustration-working.svg';
import Colors from '../../styles/Colors';
import {
  MAIN_HEADER_TEXT,
  SUB_HEADER_TEXT,
  BUTTON_TEXT,
} from './LandingPageTop.constants';

const useStyles = makeStyles({
  container: {
    padding: '75px 100px 150px',
    backgroundColor: Colors.background['@white'],
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px auto',
    maxWidth: '1440px',
    minWidth: '700px',
  },
  textAndButtonContainer: {
    width: '50%',
  },
  mainHeaderText: {
    fontSize: '72px',
    fontWeight: '900',
    fontFamily: 'sans-serif',
    color: Colors.neutral['@veryDarkViolet:'],
  },
  subHeaderTextContainer: {
    width: '80%',
  },
  subHeaderText: {
    fontWeight: '700',
    color: Colors.neutral['@grayishViolet'],
  },
  buttonContainer: {
    padding: '30px 0px',
  },
  imageContainer: {
    width: '50%',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
});

const LandingPageTop = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.textAndButtonContainer}>
          <div className={classes.mainHeaderText}>{MAIN_HEADER_TEXT}</div>
          <div className={classes.subHeaderTextContainer}>
            <div className={classes.subHeaderText}>{SUB_HEADER_TEXT}</div>
          </div>
          <div className={classes.buttonContainer}>
            <Button text={BUTTON_TEXT} size='large' />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img
            src={illustrationWorking}
            alt='illustrationworking'
            className={classes.image}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPageTop;
