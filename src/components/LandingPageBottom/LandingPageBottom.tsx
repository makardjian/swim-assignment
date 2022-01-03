import React from 'react';
import { makeStyles } from '@mui/styles';
import FeatureCard from './FeatureCard';
import Colors from '../../styles/Colors';
import {
  ADVANCED_STATISTICS,
  ADVANCED_STATISTICS_DESCRIPTION,
  FEATURES,
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
  featuresContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    gap: '64px',
    width: 'fit-content',
  },
});

const LandingPageBottom = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.header}>{ADVANCED_STATISTICS}</h2>
        <p className={styles.subheader}>{ADVANCED_STATISTICS_DESCRIPTION}</p>
        {/* new component */}
        <div className={styles.featuresContainer}>
          {FEATURES.map((feature) => {
            return <FeatureCard feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPageBottom;
