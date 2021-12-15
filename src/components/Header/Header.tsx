import React from 'react';
import { Button } from '@mui/material';
import LeftHeaderItems from './LeftHeaderItems';
import HeaderItem from './HeaderItem';
import logo from '../../static/images/logo.svg';
import useStyles from './Header.styles';
import { rightSideHeaderItem } from './headerItems';
import Colors from '../../Colors';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.contentSection}>
          <img
            src={logo}
            alt='shortly-logo'
            className={classes.shortlyLogo}
          ></img>
          <LeftHeaderItems />
        </div>
        <div className={classes.contentSection}>
          <HeaderItem text={rightSideHeaderItem} />
          <Button
            variant='contained'
            sx={{ backgroundColor: Colors['@cyan'], borderRadius: '20px' }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
