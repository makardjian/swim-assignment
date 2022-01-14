import React from 'react';
import useStyles from './LandingPageTop.styles';
import Button from '../common/Button';
import illustrationWorking from '../../static/images/illustration-working.svg';
import {
  MAIN_HEADER_TEXT,
  SUB_HEADER_TEXT,
  BUTTON_TEXT,
} from './LandingPageTop.constants';

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
