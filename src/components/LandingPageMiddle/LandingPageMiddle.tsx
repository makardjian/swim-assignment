import React from 'react';
import useStyles from './LandingPageMiddle.styles';
import inputBackgroundImage from '../../static/images/bg-shorten-desktop.svg';

const LandingPageMiddle = () => {
  const styles = useStyles();
  return (
    <div className={styles.contentContainer}>
      <div>
        <img
          className={styles.inputBackgroundImage}
          src={inputBackgroundImage}
          alt='input_background_img'
        />
      </div>
    </div>
  );
};

export default LandingPageMiddle;
