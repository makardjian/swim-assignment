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
  const styles = useStyles();
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
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
            src={illustrationWorking}
            alt='illustrationworking'
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPageTop;
