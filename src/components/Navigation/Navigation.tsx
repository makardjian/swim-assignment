import React from 'react';
import Button from '../common/Button';
import NavigationOptions from './NavigationOptions';
import shortlyLogo from '../../static/images/logo.svg';
import { makeStyles } from '@mui/styles';
import {
  leftSideNavOptions,
  rightSideNavOptions,
} from './NavigationOptions.constants';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  navRoot: {
    height: '100px',
    padding: '0px 100px',
    backgroundColor: Colors.background['@white'],
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1440px',
    minWidth: '700px',
    margin: '0px auto',
    padding: '40px 0px',
  },
  navSection: {
    display: 'flex',
    alignItems: 'center',
  },
  shortlyLogo: {
    paddingRight: '20px',
  },
});

const BUTTON_TEXT = 'Sign Up';

const Navigation = () => {
  const styles = useStyles();
  return (
    <div className={styles.navRoot}>
      <div className={styles.navContent}>
        <div className={styles.navSection}>
          <img
            src={shortlyLogo}
            alt='shortly-logo'
            className={styles.shortlyLogo}
          />
          <NavigationOptions options={leftSideNavOptions} />
        </div>
        <div className={styles.navSection}>
          <NavigationOptions options={rightSideNavOptions} />
          <Button text={BUTTON_TEXT} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
