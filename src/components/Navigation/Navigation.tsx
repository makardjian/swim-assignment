import React from 'react';
import NavigationOptions from './NavigationOptions';
import Button from '../common/Button';
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
    backgroundColor: Colors.background['@white'],
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1440px',
    minWidth: '700px',
    margin: '0px auto',
    padding: '40px 100px 0px',
  },
  navSection: {
    display: 'flex',
    alignItems: 'center',
  },
  shortlyLogo: {
    paddingRight: '20px',
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.navRoot}>
      <div className={classes.navContent}>
        <div className={classes.navSection}>
          <img
            src={shortlyLogo}
            alt='shortly-logo'
            className={classes.shortlyLogo}
          />
          <NavigationOptions options={leftSideNavOptions} />
        </div>
        <div className={classes.navSection}>
          <NavigationOptions options={rightSideNavOptions} />
          <Button text='Sign Up' />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
