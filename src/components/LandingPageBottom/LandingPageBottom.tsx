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
    margin: '0px auto',
    paddingBottom: '20px',
    // minWidth: '900px',
  },
  header: {
    fontSize: '42px',
    fontWeight: 700,
    color: Colors.neutral['@veryDarkBlue'],
  },
  subheader: {
    maxWidth: '540px',
    textAlign: 'center',
    margin: 0,
    fontWeight: 500,
    color: Colors.neutral['@grayishViolet'],
  },
  featuresContainer: {
    flexFlow: 'row-wrap',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '50px',
    gap: '64px',
    width: 'fit-content',
    zIndex: 2,
  },
  horizontalColorBar: {
    position: 'absolute',
    right: '0px',
    top: '160px',
    display: 'block',
    height: '10px',
    width: '100%',
    backgroundColor: Colors.primary['@cyan'],
    minWidth: '100px',
    zIndex: -1,
  },
});

const LandingPageBottom = () => {
  const styles = useStyles();
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.header}>{ADVANCED_STATISTICS}</h2>
        <p className={styles.subheader}>{ADVANCED_STATISTICS_DESCRIPTION}</p>
        <div className={styles.featuresContainer}>
          {FEATURES.map((feature) => {
            return <FeatureCard feature={feature} />;
          })}
          <div className={styles.horizontalColorBar}></div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageBottom;
